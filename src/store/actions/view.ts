import {ViewAction, ViewActionTypes} from '../types/view'
import {IProducts} from '../../utils/data/product'

export const setViewIdActionView = (id: number): ViewAction => {
  return {type: ViewActionTypes.SET_VIEW_ID_VIEW, id: id}
}

export const getViewActionView = (payload: IProducts[]): ViewAction => {
  return {type: ViewActionTypes.GET_VIEW_VIEW, payload: payload}
}

export const setViewActionView = (payload: IProducts): ViewAction => {
  return {type: ViewActionTypes.SET_VIEW_VIEW, payload: payload}
}