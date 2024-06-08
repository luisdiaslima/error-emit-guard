import * as Sentry from "@sentry/vue";
import { reactive } from 'vue';
import router from "../router";

 export const useAuth = () => {
  const user = reactive({
    email: '',
    password: ''
  })
  
  const login = (email: string, password: string) => {
    user.email = email
    user.password = password

    localStorage.setItem('user', user.email)
    Sentry.setUser({ email: user.email })
  }

  const logout = () => {
    user.email = '';
    user.password = '';
    Sentry.setUser(null)
    localStorage.removeItem('user')
    router.push('/')
  }

  const forgotPasswordError = () => {
    try {
      throw {
        statusCode: 400,
        message: 'User do not exists',
      }
    } catch (err: any) {
      Sentry.withScope(function (scope) {
        scope.setFingerprint(['forgotPasswordError', window.location.pathname, err.satusCode]);
        Sentry.captureException(err, {
          tags: {
            user_email: user.email
          }
        });
      });
    }
  }

  return { user, login, logout, forgotPasswordError  }
}

