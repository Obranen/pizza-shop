export interface IModalState {
  isCart: boolean
  isAuth: boolean
  isAnswer: boolean
}

export enum ModalActionTypes {
  SET_IS_CART_MODAL = 'SET_IS_CART_MODAL',
  SET_IS_AUTH_MODAL = 'SET_IS_AUTH_MODAL',
  SET_IS_ANSWER_MODAL = 'SET_IS_ANSWER_MODAL',
}

interface ISetIsCartAction {
  type: ModalActionTypes.SET_IS_CART_MODAL
  payload: boolean
}

interface ISetIsAuthAction {
  type: ModalActionTypes.SET_IS_AUTH_MODAL
  payload: boolean
}

interface ISetIsAnswerModal {
  type: ModalActionTypes.SET_IS_ANSWER_MODAL
  payload: boolean
}

export type ModalAction = ISetIsCartAction | ISetIsAuthAction | ISetIsAnswerModal