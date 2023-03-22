export class UserAccountPage {
  isUserLoginCorrectly() {
    cy.contains("Orders").should("be.visible");
    cy.title().should("include", "Saleor e-commerce", { setTimeout: 12000 });
  }
}

export const UserPage = new UserAccountPage();
