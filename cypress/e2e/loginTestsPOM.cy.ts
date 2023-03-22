const { faker } = require("@faker-js/faker");
import user from "../fixtures/user.json";
import { LoginPage } from "../support/pageObjects/loginPage";
import { UserPage } from "../support/pageObjects/userPage";

describe("Login Tests by Page Object Model", () => {
  beforeEach(() => {
    LoginPage.openLoginPage();
  });

  it("Correct login", () => {
    LoginPage.fillLoginInputs(user.mail, user.password);
    LoginPage.clickSignInButton();
    UserPage.isUserLoginCorrectly();
  });

  it("Incorrect login", () => {
    LoginPage.fillLoginInputs(
      faker.internet.email(),
      faker.internet.password()
    );
    LoginPage.clickSignInButton();
    LoginPage.isLoginErrorMessageDisplayed();
  });
});
