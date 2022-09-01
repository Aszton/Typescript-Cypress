import { userAccountSelectors } from "./selectors/userAccountSelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      isUserLoginCorrectly(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("isUserLoginCorrectly", () => {
  cy.get(userAccountSelectors.ordersTab).should("be.visible");
  cy.title().should("eq", "Dashboard | Saleor e-commerce");
});
