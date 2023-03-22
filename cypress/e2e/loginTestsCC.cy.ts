import user from "../fixtures/user.json";
const { faker } = require("@faker-js/faker");

describe("Login Tests by Custom Commands", () => {
  beforeEach(() => {
    cy.openLoginPage();
  });

  it("Correct login", () => {
    cy.fillLoginInputs(user.mail, user.password);
    cy.clickSignInButton();
    cy.isUserLoginCorrectly();
  });

  it("Incorrect login", () => {
    cy.fillLoginInputs(faker.internet.email(), faker.internet.password());
    cy.clickSignInButton();
    cy.isLoginErrorMessageDisplayed();
  });
});
