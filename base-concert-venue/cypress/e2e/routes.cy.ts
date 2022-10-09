import "@testing-library/cypress/add-commands";
import "@testing-library/cypress";

import { generateNewBand } from "@/__tests__/__mocks__/fakeData/newBand";
import { generateRandomId } from "@/lib/features/reservations/utils";

it("displays correct heading when navigating to shows route", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /shows/i }).click();
  cy.findByRole("heading", { name: /upcoming shows/i }).should("exist");
});

it("displays correct heading when navigating to bands rout", () => {
  cy.visit("/auth/signin");
  cy.findByRole("button", { name: /bands/i }).click();
  cy.findByRole("heading", { name: /our Illustrious Performers/i });
});

// it("reset the database", () => {
//   cy.task("db:reset");
// });
describe("verify bands", () => {
  beforeEach(() => {
    cy.task("db:reset");
  });

  it("dipslay correct band name for band route that existed at build time", async () => {
    cy.visit("/bands/2");
    cy.findByRole("heading", { name: /The Joyous Nun Riot/i }).should("exist");
  });

  it("render error message when band id doesnt exist ", () => {
    cy.visit("/bands/111");
    cy.findByRole("heading", { name: /Error: band not found/i }).should(
      "exist"
    );
  });

  it("displays name for band that was not present at build time ", () => {
    const bandId = generateRandomId();
    const newBand = generateNewBand(bandId);
    cy.task("add:band", newBand);
    cy.visit(`/bands/${bandId}`);
    cy.findByRole("heading", { name: "Avalanche of Cheese" }).should("exist");
  });
});
