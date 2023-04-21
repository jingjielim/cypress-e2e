/// <reference types="Cypress" />

describe("tasks management", () => {
  it("should open and close the new task modal", () => {
    cy.visit("http://127.0.0.1:5174/");
    cy.contains("Add Task").click();
    cy.get(".backdrop").click({ force: true });
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });
});
