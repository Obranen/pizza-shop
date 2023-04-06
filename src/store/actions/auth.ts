import {AuthAction, AuthActionTypes} from '../types/auth'

export const setIsAuthActionAuth = (auth: boolean): AuthAction => {
  return {type: AuthActionTypes.SET_IS_AUTH_AUTH, payload: auth}
}