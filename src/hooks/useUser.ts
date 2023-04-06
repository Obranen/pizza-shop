export const useUser = () => {
  const getUserEmail = () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!)
      return user.email
    }
  }

  return {getUserEmail}
}