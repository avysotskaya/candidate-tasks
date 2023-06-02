package solution;

import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class LoginPageTest {

    @Test
    public void testLoginReturnsTrueWithValidCredentials() {
        String username = "validUsername";
        String password = "validPassword";

        AuthenticationService authService = mock(AuthenticationService.class);
        when(authService.authenticate(username, password)).thenReturn(true);

        LoginPage loginPage = new LoginPage();
        boolean result = loginPage.login(username, password, authService);

        assertThat("Login should return true when authenticated", result, is(true));
        verify(authService).authenticate(username, password);
    }

    @Test
    public void testLoginReturnsFalseWithInvalidCredentials() {
        String username = "invalidUsername";
        String password = "invalidPassword";

        AuthenticationService authService = mock(AuthenticationService.class);
        when(authService.authenticate(username, password)).thenReturn(false);

        LoginPage loginPage = new LoginPage();
        boolean result = loginPage.login(username, password, authService);

        assertThat("Login should return false when not authenticated", result, is(false));
        verify(authService).authenticate(username, password);
    }
}
