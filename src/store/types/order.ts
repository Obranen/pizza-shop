import {IProducts} from '../../utils/data/product'

export interface IOrders {
  id: number | string
  date: string
  time: string
  userEmail: string
  product: IProducts[]
}

export interface IOrderState {
  orders: IOrders[]
}

export enum OrderActionTypes {
  GET_ORDERS_ORDER = 'GET_ORDERS_ORDER',
}

interface IGetOrderAction {
  type: OrderActionTypes.GET_ORDERS_ORDER,
  payload: IOrders
}

export type OrderAction = IGetOrderAction