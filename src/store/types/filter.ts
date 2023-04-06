import {IProducts} from '../../utils/data/product'

export interface IFilterState {
  filters: IProducts[]
}

export enum FilterActionTypes {
  GET_FILTERS_FILTER = 'GET_FILTERS_FILTER',
}

interface IGetFilterAction {
  type: FilterActionTypes.GET_FILTERS_FILTER,
  payload: IProducts[]
}

export type FilterAction = IGetFilterAction