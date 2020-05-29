import {
  BaseAuthAPI,
} from './__BaseAuthAPI'

export class TestAuthAPI extends BaseAuthAPI {
  login(args: { username: string; password: string; }): Promise<{}> {
    throw new Error("Method not implemented.");
  }

}