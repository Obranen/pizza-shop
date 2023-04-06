import {IOrders, OrderAction, OrderActionTypes} from '../types/order'

export const getOrdersActionOrder = (payload: IOrders): OrderAction => {
  return {type: OrderActionTypes.GET_ORDERS_ORDER, payload: payload}
}