import type {Meta, StoryObj} from "@storybook/react";
import {Input} from "./input";

const meta: Meta<typeof Input> = {
    title: "Shadcn/Input",
    component: Input,
    argTypes: {
        disabled: {control: "boolean"},
        placeholder: {control: "text"},
        type: {
            control: {
                type: "select",
                options: ["text", "number", "email", "password"],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: "Type something...",
        disabled: false,
        type: "text",
    },
};

export const WithValue: Story = {
    args: {
        value: "Hello, Storybook!",
        type: "text",
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Can't type here...",
        disabled: true,
    },
};

export const Email: Story = {
    args: {
        placeholder: "Enter your email...",
        type: "email",
    },
};

export const Password: Story = {
    args: {
        placeholder: "Password...",
        type: "password",
    },
};

export const WithLeftIcon: Story = {
    render: () => (
        <div className="relative flex items-center">
            <svg
                className="absolute left-3 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M15 11a3 3 0 106 0 3 3 0 00-6 0z" strokeWidth="2"/>
                <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7"
                    strokeWidth="2"
                />
            </svg>
            <Input
                className="pl-10"
                placeholder="Search..."
                aria-label="Search input"
            />
        </div>
    ),
};
