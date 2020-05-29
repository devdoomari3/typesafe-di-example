import {
  Design,
  Injector,
} from 'typesafe-di'

import {
  AUTH_API_DI_KEY, WithAuthAPI,
} from '../api/AuthAPI/__BaseAuthAPI'
import {
  TestAuthAPI,
} from '../api/AuthAPI/TestAuthAPI'

import {
  AuthCore,
  WithAuthCore,
  AUTH_CORE_DI_KEY,
} from '../core/auth'

const design = Design
  .bind(AUTH_API_DI_KEY, () => new TestAuthAPI())
  .bind(
    AUTH_CORE_DI_KEY,
    async (injector: Injector<WithAuthAPI>) => {
      return new AuthCore(await injector.authAPI)
    })

async function initApp() {
  const result = await design.resolve({})
  await result.finalize();
  console.log(result.container.authCore)
}

initApp()