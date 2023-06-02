import * as sinon from "sinon";
import * as chai from "chai"
import { expect } from "chai";
import sinonChai from "sinon-chai";
import { LoginPage } from "../src/LoginPage";
import { AuthenticationService } from "../src/AuthenticationService";

chai.use(sinonChai);

describe("LoginPage", () => {

    // In unit tests, it is generally not considered a good practice to create an instance of the object under test in the shared scope
    // before() / beforeEach() are not used here

    describe("login", () => {

        it("should return true for valid credentials", () => {
            const username = "validUsername";
            const password = "validPassword";

            const authService = sinon.createStubInstance(AuthenticationService);
            authService.authenticate.returns(true);

            const loginPage = new LoginPage();
            const result = loginPage.login(username, password, authService);

            expect(result).to.be.true;
            expect(authService.authenticate).to.be.calledWith(username, password);
        });

        it("should return false for invalid credentials", () => {
            const username = "invalidUsername";
            const password = "invalidPassword";

            const authService = sinon.createStubInstance(AuthenticationService);
            authService.authenticate.returns(false);

            const loginPage = new LoginPage();
            const result = loginPage.login(username, password, authService);

            expect(result).to.be.false;
            expect(authService.authenticate).to.be.calledWith(username, password);
        });
    });
});
