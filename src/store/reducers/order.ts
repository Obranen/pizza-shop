import {IOrderState, OrderActionTypes} from '../types/order'

const initialState: IOrderState = {
  orders: []
}

export const order = (state = initialState, action: any): IOrderState => {
  switch (action.type) {
    case OrderActionTypes.GET_ORDERS_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
    default: return state
  }
}