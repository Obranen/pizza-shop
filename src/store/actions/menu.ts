import {MenuAction, MenuActionTypes} from '../types/menu'

export const setIsClickLinkMenuActionMenu = (isClickLinkMenu: boolean): MenuAction => {
  return {type: MenuActionTypes.IS_CLICK_LINK_MENU, payload: isClickLinkMenu}
}