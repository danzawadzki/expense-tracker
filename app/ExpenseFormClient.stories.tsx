import type { Meta, StoryObj } from '@storybook/react';
import ExpenseFormClient from './ExpenseFormClient';

const meta: Meta<typeof ExpenseFormClient> = {
  title: 'Expenses/ExpenseFormClient',
  component: ExpenseFormClient,
  parameters: {},
};
export default meta;

type Story = StoryObj<typeof ExpenseFormClient>;

export const Default: Story = {};
