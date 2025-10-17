import { AUTH_EVENTS, Identity, initialize } from "@bcwdev/auth0provider-client";
import { VITE_AUTH0_AUDIENCE as audience, VITE_AUTH0_CLIENT_ID as clientId, VITE_AUTH0_DOMAIN as domain } from '../env';
import { AppState } from "@/AppState";
import { api } from "./AxiosService";
import { accountService } from "./AccountService";



export const AuthService = initialize({
  domain,
  clientId,
  authorizationParams: {
    audience,
    redirect_uri: window.location.origin,
  },
});

AuthService.on(AUTH_EVENTS.AUTHENTICATED, async ()=> {
  api.defaults.headers.authorization = AuthService.bearer
  api.interceptors.request.use(refreshAuthToken);
  AppState.identity = AuthService.identity as Identity;
  await accountService.getAccount();
})

async function refreshAuthToken(config: any){
  if (AuthService.state == AUTH_EVENTS.AUTHENTICATED) { return config }
  const expires = AuthService.identity.exp * 1000
  const expired = expires < Date.now();
  const needsRefresh = expires < Date.now() + (1000 * 60 * 60 * 12)
  if (expired) {
    await AuthService.loginWithPopup();
  } else if (needsRefresh){
    await AuthService.getTokenSilently()
    api.defaults.headers.authorization = AuthService.bearer;
  }
  return config
}