import {IOptions} from '../../utils/data/product'

export interface ITotalPrice {
  id: number
  price: number
  quantity: number
  options: IOptions[]
}

export interface ICartState {
  cart: number[]
  totalPrice: ITotalPrice[]
  deleteProduct?: number | null
  isClear: boolean
}

export enum CartActionTypes {
  GET_CART_CART = 'GET_CART_CART',
  SET_IS_CLEAR_CART = 'SET_IS_CLEAR_CART',
  GET_TOTAL_PRICE_CART = 'GET_TOTAL_PRICE_CART',
  SET_TOTAL_PRICE_CART = 'SET_TOTAL_PRICE_CART',
  SET_DELETE_PRODUCT_CART = 'SET_DELETE_PRODUCT_CART',
  SET_CLEAR_CLASSES_CART = 'SET_CLEAR_CLASSES_CART',
}

interface IGetCartAction {
  type: CartActionTypes.GET_CART_CART
  id: number
}

interface ISetIsClearAction {
  type: CartActionTypes.SET_IS_CLEAR_CART
  payload: boolean
}

interface IGetTotalPriceAction {
  type: CartActionTypes.GET_TOTAL_PRICE_CART
  payload: ITotalPrice
}

interface ISetTotalPriceAction {
  type: CartActionTypes.SET_TOTAL_PRICE_CART
  payload: ITotalPrice
}

interface ISetDeleteProductAction {
  type: CartActionTypes.SET_DELETE_PRODUCT_CART
  id: number
}

interface ISetClearClassesAction {
  type: CartActionTypes.SET_CLEAR_CLASSES_CART
  id: number | null
}

export type CartAction = IGetCartAction | ISetDeleteProductAction | ISetClearClassesAction | IGetTotalPriceAction | ISetTotalPriceAction | ISetIsClearAction