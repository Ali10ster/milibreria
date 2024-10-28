import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example";

const meta: Meta<typeof Example> = {
    title: "AlisterMM",
    component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        text: "Componente AlisterMM primario",
        alignment: "center",
        color: "success",
        bottomMargin: true,
        variant: "h1",
    },
};

export const Secondary: Story = {
    args: {
        text: "Componente AlisterMM secundario",
        alignment: "right",
        color: "warning",
        bottomMargin: false,
        variant: "caption",
    },
};
