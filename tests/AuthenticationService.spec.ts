import { expect } from "chai";
import { AuthenticationService } from "../src/AuthenticationService";

describe("AuthenticationService", () => {

    describe("authenticate", () => {

        it("should throw an exception when not implemented", () => {
            const authenticationService = new AuthenticationService();

            expect(() => authenticationService.authenticate("validUsername", "validPassword"))
                .to.throw("AuthenticationService - Not Implemented");
        });

    });
});
