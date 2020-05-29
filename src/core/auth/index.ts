import { BaseAuthAPI } from "../../api/AuthAPI/__BaseAuthAPI";

export class AuthCore {
  constructor(
    public authAPI: BaseAuthAPI,
  ) {

  }
}

export type WithAuthCore = {
  authCore: AuthCore,
}

export const AUTH_CORE_DI_KEY = 'authCore'