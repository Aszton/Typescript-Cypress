export {};
declare global {
  namespace Cypress {
    interface Chainable {
      clickButton(selector: string): Chainable<void>;
      clickByText(text: string): Chainable<void>;
      findAndType(selector: string, text: string): Chainable<void>;
      clickButtonIfExist(selector: string): Chainable<void>;
      clickSelectorByName(selector: string, name: string): Chainable<void>;
      clickButtonByPartialText(selector: string, text: string): Chainable<void>;
      clickButton1orButton2(
        selector1: string,
        selector2: string
      ): Chainable<void>;
      clickOnlyWhenOtherElementDissapear(
        selector1: string,
        selector2: string
      ): Chainable<void>;
    }
  }
}

Cypress.Commands.add("clickButton", (selector) => {
  cy.get(selector).should("be.visible").click();
});

Cypress.Commands.add("clickByText", (text) => {
  cy.contains(text).should("be.visible").click();
});

Cypress.Commands.add("findAndType", (selector, text) => {
  cy.get(selector)
    .should("be.visible")
    .clear()
    .type(text)
    .should("have.value", text);
});

Cypress.Commands.add("clickButtonIfExist", (selector) => {
  cy.get("body").then((body) => {
    if (body.find(selector).length > 0) {
      cy.get(selector).should("be.visible").click();
    }
  });
});

Cypress.Commands.add("clickSelectorByName", (selector, name) => {
  cy.get(selector).each(($el) => {
    if ($el.text() === name) {
      cy.get(selector).should("be.visible").click();
    }
  });
});

Cypress.Commands.add("clickButtonByPartialText", (selector, text) => {
  cy.get(selector).then(($btn) => {
    if ($btn.text().includes(text)) {
      cy.get(selector).should("be.visible").click();
    }
  });
});

Cypress.Commands.add("clickButton1orButton2", (selector1, selector2) => {
  cy.get("body").then((body) => {
    if (body.find(selector1).length > 0) {
      cy.get(selector1).should("be.visible").click();
    } else {
      cy.get(selector2).should("be.visible").click();
    }
  });
});

Cypress.Commands.add(
  "clickOnlyWhenOtherElementDissapear",
  (selector1, selector2) => {
    cy.get("body").then((body) => {
      if (body.find(selector1).length > 0) {
        cy.get(selector1, { timeout: 15000 }).should("not.exist");
      }
    });
    cy.get(selector2).should("be.visible").click();
  }
);
