import {FilterAction, FilterActionTypes} from '../types/filter'
import {IProducts} from '../../utils/data/product'

export const getFiltersActionFilter = (payload: IProducts[]): FilterAction => {
  return {type: FilterActionTypes.GET_FILTERS_FILTER, payload: payload}
}