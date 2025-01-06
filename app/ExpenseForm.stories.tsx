import type { Meta, StoryObj } from "@storybook/react";
import ExpenseForm from "./ExpenseForm";

const meta: Meta<typeof ExpenseForm> = {
    title: "Expenses/ExpenseForm",
    component: ExpenseForm,
    parameters: {
    },
};
export default meta;

type Story = StoryObj<typeof ExpenseForm>;

export const Default: Story = {};
