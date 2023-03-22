import { loginSelectors } from "../selectors/loginSelectors";
export {};
declare global {
  namespace Cypress {
    interface Chainable {
      openLoginPage(): Chainable<void>;
      fillLoginInputs(email: string, password: string): Chainable<void>;
      clickSignInButton(): Chainable<void>;
      isLoginErrorMessageDisplayed(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("openLoginPage", () => {
  cy.visit("/");
  cy.title().should("eq", "Sign in to the Saleor Dashboard");
});

Cypress.Commands.add("fillLoginInputs", (email, password) => {
  cy.get(loginSelectors.emailInput)
    .clear()
    .type(email)
    .should("have.value", email);
  cy.get(loginSelectors.passwordInput)
    .clear()
    .type(password)
    .should("have.value", password);
});

Cypress.Commands.add("clickSignInButton", () => {
  cy.get(loginSelectors.signInButton).click();
  cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

Cypress.Commands.add("isLoginErrorMessageDisplayed", () => {
  cy.get(loginSelectors.errorLogin).should(
    "include.text",
    "Your username and/or password are incorrect. Please try again."
  );
});
