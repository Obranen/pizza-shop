import {PaginationAction, PaginationActionTypes} from '../types/pagination'

export const setShowActionPagination = (quantity: number): PaginationAction => {
  return {type: PaginationActionTypes.SET_SHOW_PAGINATION, payload: quantity}
}

export const setLastIndexActionPagination = (index: number): PaginationAction => {
  return {type: PaginationActionTypes.SET_LAST_INDEX_PAGINATION, payload: index}
}

export const setFirstIndexActionPagination = (index: number): PaginationAction => {
  return {type: PaginationActionTypes.SET_FIRST_INDEX_PAGINATION, payload: index}
}