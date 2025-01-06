'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/trpc/client';

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

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createExpense.mutate({
      description,
      amount: parseFloat(amount || '0'),
    });
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 w-64">
        <div>
          <label>Description</label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Amount</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button type="submit">Add Expense</Button>
      </form>

      <ul className="mt-8 space-y-2">
        {expenseList?.map((ex) => (
          <li key={ex.id}>
            {ex.description} - ${Number(ex?.amount).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
