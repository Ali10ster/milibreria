import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AlisterMM from "../alistermm";
import React from "react";

describe("AlisterMM component", () => {
    it("El icono se debe renderizar correctamente", () => {
        render(
            <AlisterMM
                text="Esto es un texto de prueba"
                alignment="center"
                color="primary"
                bottomMargin={true}
                variant="h1"
            />
        );
        const textElement = screen.getByText("Esto es un texto de prueba");
        expect(textElement).toBeInTheDocument();
    });
});
