import { POKEMONS_PRELOAD_COUNT } from "@src/constants";

describe("Homepage", () => {
    it("should display preloaded pokemons", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // The home page should contain 9 prerendered pokemons
        cy.get("div[class='home-page__listing']").children()
            .should("have.length", POKEMONS_PRELOAD_COUNT)
            .should("have.class", "pokemon-card-component");
    });
});

export {};
