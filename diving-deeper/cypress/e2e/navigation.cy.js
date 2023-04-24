/// <reference types="Cypress"/>

describe("page navigation", () => {
  it("should navigate between pages", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get('[data-cy="header-about-link"]');
  });
});
