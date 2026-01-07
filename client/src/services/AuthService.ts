import {
  AUTH_EVENTS,
  Identity,
  initialize,
} from "@bcwdev/auth0provider-client";
import { audience, clientId, domain } from "../env";
import { api } from "./AxiosService";
import type { InternalAxiosRequestConfig } from "axios";
import { accountService } from "./AccountService";
import { useAuthStore } from "@/stores/AuthStore";

export const AuthService = initialize({
  domain,
  clientId,
  authorizationParams: {
    audience,
    redirect_uri: window.location.origin,
  },
});

AuthService.on(AUTH_EVENTS.AUTHENTICATED, async () => {
  const authStore = useAuthStore();
  api.defaults.headers.authorization = AuthService.bearer;
  api.interceptors.request.use(refreshAuthToken);
  authStore.identity = AuthService.identity as Identity;
  await accountService.getAccount();
});

async function refreshAuthToken(config: InternalAxiosRequestConfig) {
  if (AuthService.state == AUTH_EVENTS.AUTHENTICATED) {
    return config;
  }
  const expires = AuthService.identity.exp * 1000;
  const expired = expires < Date.now();
  const needsRefresh = expires < Date.now() + 1000 * 60 * 60 * 12;
  if (expired) {
    await AuthService.loginWithPopup();
  } else if (needsRefresh) {
    await AuthService.getTokenSilently();
    api.defaults.headers.authorization = AuthService.bearer;
  }
  return config;
}
