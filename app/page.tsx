// app/expenses/page.tsx
import ExpenseForm from "./ExpenseForm";

export default function Home() {
  return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
        <ExpenseForm />
      </div>
  );
}
