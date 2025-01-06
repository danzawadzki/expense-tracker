"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ExpenseForm() {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <Input type="text" placeholder="Enter description" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <Input type="number" placeholder="Enter amount" />
            </div>
            <Button type="submit" variant="default" className="mt-4">
                Add Expense
            </Button>
        </form>
    );
}
