/// <reference types="Cypress" />
import user from "../fixtures/user.json";
const { faker } = require("@faker-js/faker")

describe("Login Tests", () => {
  beforeEach(() => {
    cy.openLoginPage();
  });

  it("Login with valid creditentials", () => {
    cy.fillLoginInputs(`${user.mail}`, `${user.password}`);
    cy.clickSignInButton();
    cy.isUserLoginCorrectly();
  });
  it("Login with invalid creditentials", () => {
    cy.fillLoginInputs(faker.internet.email(), faker.internet.password());
    cy.clickSignInButton();
    cy.isLoginErrorMessageDisplayed();
  });
});
