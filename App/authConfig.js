/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 * For more details on using MSAL.js with Azure AD B2C, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/working-with-b2c.md 
 */

const msalConfig = {
    auth: {
      clientId: "96ac3f26-2ea4-46a9-904b-4fa58e9ed2b0", // This is the ONLY mandatory field; everything else is optional.
      authority: "https://login.microsoft.com/fsraob2cedc.onmicrosoft.com", // Choose sign-up/sign-in user-flow as your default.
      // authority: "https://fsraob2cedc.b2clogin.com/fsraob2cedc.onmicrosoft.com",
      redirectUri: "https://mis3poc.fsrao.ca/dashboard", // You must register this URI on Azure Portal/App Registration. Defaults to "window.location.href".
    },
    cache: {
      cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
      storeAuthStateInCookie: false, // If you wish to store cache items in cookies as well as browser cache, set this to "true".
    }
  };
  
/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
};

  // Add scopes for the access token to be used at Microsoft Graph API endpoints.
  const tokenRequest = {
    scopes: ["Mail.Read"]
  };
