import {ModalAction, ModalActionTypes} from '../types/modal'

export const setIsCartActionModal = (isCart: boolean): ModalAction => {
  return {type: ModalActionTypes.SET_IS_CART_MODAL, payload: isCart}
}

export const setIsAuthActionModal = (isAuth: boolean): ModalAction => {
  return {type: ModalActionTypes.SET_IS_AUTH_MODAL, payload: isAuth}
}

export const setIsAnswerActionModal = (isAnswer: boolean): ModalAction => {
  return {type: ModalActionTypes.SET_IS_ANSWER_MODAL, payload: isAnswer}
}