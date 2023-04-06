import {IMenuState, MenuActionTypes} from '../types/menu'

const initialState: IMenuState = {
  isClickLink: false
}

export const menu = (state = initialState, action: any): IMenuState => {
  switch (action.type) {
    case MenuActionTypes.IS_CLICK_LINK_MENU:
      return {
        ...state,
        isClickLink: action.payload
      }
    default: return state
  }
}