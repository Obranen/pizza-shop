import {CartAction, CartActionTypes, ITotalPrice} from '../types/cart'

export const getCartActionCart = (id: number): CartAction => {
  return {type: CartActionTypes.GET_CART_CART, id: id}
}

export const setIsClearActionCart = (boolean: boolean): CartAction => {
  return {type: CartActionTypes.SET_IS_CLEAR_CART, payload: boolean}
}

export const getTotalPriceActionCart = (array: ITotalPrice): CartAction => {
  return {type: CartActionTypes.GET_TOTAL_PRICE_CART, payload: array}
}

export const setTotalPriceActionCart = (totalPrice: ITotalPrice): CartAction => {
  return {type: CartActionTypes.SET_TOTAL_PRICE_CART, payload: totalPrice}
}

export const setDeleteProductActionCart = (id: number): CartAction => {
  return {type: CartActionTypes.SET_DELETE_PRODUCT_CART, id: id}
}

export const setClearClassesActionCart = (id: number | null): CartAction => {
  return {type: CartActionTypes.SET_CLEAR_CLASSES_CART, id: id}
}