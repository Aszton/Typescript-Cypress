import { loginSelectors } from "../selectors/loginSelectors";

export class Login {
  openLoginPage() {
    cy.visit(Cypress.env("environment"));
    cy.title().should("eq", "Sign in to the Saleor Dashboard");
  }
  fillLoginInputs(user: string, password: string) {
    cy.findAndType(loginSelectors.emailInput, user);
    cy.findAndType(loginSelectors.passwordInput, password);
  }
  clickSignInButton() {
    cy.clickButton(loginSelectors.signInButton);
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }
  isLoginErrorMessageDisplayed() {
    cy.get(loginSelectors.errorLogin).should(
      "include.text",
      "Your username and/or password are incorrect. Please try again."
    );
  }
}

export const LoginPage = new Login();
