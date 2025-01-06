// app/expenses/page.tsx
import ExpenseFormClient from './ExpenseFormClient';
import { getServerExpenses } from '@/app/actions';

export default async function Home() {
  const serverExpenses = await getServerExpenses();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <ExpenseFormClient serverExpenses={serverExpenses} />
    </div>
  );
}
