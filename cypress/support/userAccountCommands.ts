import { userAccountSelectors } from "./selectors/userAccountSelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      isUserLoginCorrectly(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("isUserLoginCorrectly", () => {
  cy.contains("Orders").should("be.visible");
  cy.title().should("eq", "Panel sterowania | Saleor e-commerce");
});
