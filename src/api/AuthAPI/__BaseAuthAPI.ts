export abstract class BaseAuthAPI {
  abstract login(args: {
    username: string,
    password: string,
  }): Promise<{}>
}

export type WithAuthAPI = {
  authAPI: BaseAuthAPI;
}
export const AUTH_API_DI_KEY = 'authAPI'