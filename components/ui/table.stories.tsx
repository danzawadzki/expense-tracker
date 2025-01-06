import type {Meta, StoryObj} from "@storybook/react";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";

const meta: Meta = {
    title: "Shadcn/Table",
    component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: () => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Groceries</TableCell>
                    <TableCell>$45.99</TableCell>
                    <TableCell>2023-10-05</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Rent</TableCell>
                    <TableCell>$1200</TableCell>
                    <TableCell>2023-10-01</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Utilities</TableCell>
                    <TableCell>$80.50</TableCell>
                    <TableCell>2023-10-03</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
};
