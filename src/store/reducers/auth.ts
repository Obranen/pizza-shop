import {AuthActionTypes, IAuthState} from '../types/auth'

const initialState: IAuthState = {
  isAuth: false
}

export const auth = (state = initialState, action: any): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_IS_AUTH_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    default: return state
  }
}