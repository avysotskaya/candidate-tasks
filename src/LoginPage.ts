import { AuthenticationService } from "./AuthenticationService";

// Imported from {@link tasks/task01/task01.ts} code versions for TS
export class LoginPage {
    login(username: string, password: string, authService: AuthenticationService): boolean {
        let result = false;

        // Call the authentication service to check the credentials
        if (authService.authenticate(username, password)) {
            // If the authentication service returns true, set the result to true
            result = true;
        }

        return result;
    }
}
