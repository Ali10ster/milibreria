import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavouriteBorder from "../myfavouriteborder";
import React from "react";
describe("MyFavourite component", () => {
it("El icono se debe renderizar correctamente", () => {
render(<MyFavouriteBorder iconColor="success"/>);
const Button = screen.getByRole("button");
expect(Button).toBeInTheDocument();
});
});