import { reactive } from 'vue'

 export const useAuth = () => {
  const user = reactive({
    email: '',
    password: ''
  })
  
  const login = (email: string, password: string) => {
    user.email = email
    user.password = password

    localStorage.setItem('user', user.email)
  }

  const logout = () => {
    user.email = '';
    user.password = '';

    localStorage.removeItem('user')
  }

  return { user, login, logout  }
}

