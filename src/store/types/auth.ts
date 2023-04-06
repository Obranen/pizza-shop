export interface IAuthState {
  isAuth: boolean
}

export enum AuthActionTypes {
  SET_IS_AUTH_AUTH = 'SET_IS_AUTH_AUTH'
}

interface ISetIsAuthAction {
  type: AuthActionTypes.SET_IS_AUTH_AUTH,
  payload: boolean
}

export type AuthAction = ISetIsAuthAction