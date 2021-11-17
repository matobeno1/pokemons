import { POKEMONS_PRELOAD_COUNT } from "@src/constants";

describe("Navigation", () => {
    it("should navigate to the about page", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // The home page should contain 9 prerendered pokemons
        cy.get("div[class='home-page__listing']").children().should("have.length", POKEMONS_PRELOAD_COUNT);
    });
});

export {};
