/// <reference types="Cypress" />
import user from "../fixtures/user.json";

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
    cy.fillLoginInputs(`${user.fail}`, `${user.fail}`);
    cy.clickSignInButton();
    cy.isLoginErrorMessageDisplayed();
  });
});
