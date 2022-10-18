import "@testing-library/cypress/add-commands";
import "@testing-library/cypress";
// https://glebbahmutov.com/blog/ssr-e2e/

it("skips client-side bundle, confirming data from ISR cache", () => {
  cy.request("/shows")
    .its("body")
    .then((html) => {
      // remove the scripts, so they don't start automatically
      const staticHtml = html.replace(/<script.*?>.*?<\/script>/gm, "");

      cy.state("document").write(staticHtml);

      cy.findByText(/2022 apr/i).should("have.length.of", 3);
    });
});
