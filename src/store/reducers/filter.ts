import {FilterActionTypes, IFilterState} from '../types/filter';

const initialState: IFilterState = {
  filters: []
}

export const filter = (state = initialState, action: any): IFilterState => {
  switch (action.type) {
    case FilterActionTypes.GET_FILTERS_FILTER:
      return {
        ...state,
        filters: action.payload
      }
    default: return state
  }
}