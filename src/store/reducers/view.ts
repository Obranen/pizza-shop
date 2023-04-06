import {IViewState, ViewActionTypes} from '../types/view'

const initialState: IViewState = {
  view: [],
  viewId: null
}

export const view = (state = initialState, action: any): IViewState => {
  switch (action.type) {
    case ViewActionTypes.GET_VIEW_VIEW:
      return {
        ...state,
        view: action.payload
      }
    case ViewActionTypes.SET_VIEW_ID_VIEW:
      return {
        ...state,
        viewId: action.id
      }
    case ViewActionTypes.SET_VIEW_VIEW:
      return {
        ...state,
        view: state.view.map(product => product.id === action.payload.id ? action.payload : product)
      }
    default: return state
  }
}