'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/trpc/client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

interface ExpensesPageClientProps {
  serverExpenses: {
    id: number;
    description: string;
    amount: number;
  }[];
}

export default function ExpenseFormClient({
  serverExpenses,
}: ExpensesPageClientProps) {
  const { data: expenseList, refetch } = trpc.getExpenses.useQuery(undefined, {
    initialData: serverExpenses,
  });

  const createExpense = trpc.createExpense.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const deleteExpense = trpc.deleteExpense.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !amount) return;

    createExpense.mutate({
      description,
      amount: parseFloat(amount),
    });
    setDescription('');
    setAmount('');
  };

  const handleDelete = (id: number) => {
    deleteExpense.mutate({ id });
  };

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Expense</CardTitle>
          <CardDescription>Log a new expense below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Description</label>
              <Input
                type="text"
                value={description}
                placeholder="Coffee, Groceries, etc."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Amount</label>
              <Input
                type="number"
                min="0"
                step="0.01"
                value={amount}
                placeholder="e.g. 3.50"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Add Expense
          </Button>
        </CardFooter>
      </Card>

      <Table className="border rounded-md">
        <TableCaption>Your latest expenses</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenseList && expenseList.length > 0 ? (
            expenseList.map((ex) => (
              <TableRow key={ex.id}>
                <TableCell>{ex.description}</TableCell>
                <TableCell>${Number(ex.amount).toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(ex.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No expenses yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
