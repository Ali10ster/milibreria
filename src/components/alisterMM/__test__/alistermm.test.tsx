import { render, screen } from "@testing-library/react";
import AlisterMM from "../alistermm";
import React from "react";

describe("AlisterMM component", () => {
    it("El rating se debe renderizar con el valor correcto", () => {
        render(<AlisterMM ratingValue={4} onRatingChange={() => {}} />);
        
        // Seleccionamos el elemento de rating con el data-testid y verificamos su valor
        const ratingElement = screen.getByTestId("rating-component");
        expect(ratingElement).toBeInTheDocument();
        expect(ratingElement).toHaveAttribute("aria-label", "4 Stars");
    });
});

