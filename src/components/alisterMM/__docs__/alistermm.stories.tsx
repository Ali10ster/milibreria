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
        ratingValue: 4, // Valor inicial del rating
        onRatingChange: (newRating: number) => console.log("Nuevo rating:", newRating),
    },
};

export const Secondary: Story = {
    args: {
        ratingValue: 2, // Valor inicial del rating
        onRatingChange: (newRating: number) => console.log("Nuevo rating secundario:", newRating),
    },
};
