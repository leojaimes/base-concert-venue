import "@testing-library/cypress/add-commands";
import "@testing-library/cypress";

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

it("reset the database", () => {
  cy.task("db:reset");
});
