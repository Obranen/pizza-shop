import {IModalState, ModalActionTypes} from '../types/modal'

const initialState: IModalState = {
  isCart: false,
  isAuth: false,
  isAnswer: false
}

export const modal = (state = initialState, action: any): IModalState => {
  switch (action.type) {
    case ModalActionTypes.SET_IS_CART_MODAL:
      return {
        ...state,
        isCart: action.payload
      }
    case ModalActionTypes.SET_IS_AUTH_MODAL:
      return {
        ...state,
        isAuth: action.payload
      }
    case ModalActionTypes.SET_IS_ANSWER_MODAL:
      return {
        ...state,
        isAnswer: action.payload
      }
    default:
      return state
  }
}