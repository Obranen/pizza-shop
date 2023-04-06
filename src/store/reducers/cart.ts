import {CartActionTypes, ICartState} from '../types/cart'

const initialState: ICartState = {
  cart: [],
  totalPrice: [],
  deleteProduct: null,
  isClear: false
}

export const cart = (state = initialState, action: any): ICartState => {
  switch (action.type) {
    case CartActionTypes.GET_CART_CART:
      return {
        ...state,
        cart: [...state.cart, action.id]
      }
    case CartActionTypes.SET_IS_CLEAR_CART:
      return {
        ...state,
        cart: [],
        totalPrice: [],
        isClear: action.payload
      }
    case CartActionTypes.GET_TOTAL_PRICE_CART:
      return {
        ...state,
        totalPrice: [...state.totalPrice, action.payload]
      }
    case CartActionTypes.SET_TOTAL_PRICE_CART:
      return {
        ...state,
        totalPrice: state.totalPrice.map(product => product.id === action.payload.id ? action.payload : product)
      }
    case CartActionTypes.SET_DELETE_PRODUCT_CART:
      return {
        ...state,
        cart: state.cart.filter((id) => id !== action.id),
        totalPrice: state.totalPrice.filter((obj) => obj.id !== action.id)
      }
    case CartActionTypes.SET_CLEAR_CLASSES_CART:
      return {
        ...state,
        deleteProduct: action.id
      }
    default:
      return state
  }
}
