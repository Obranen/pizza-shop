export interface IMenuState {
  isClickLink: boolean
}

export enum MenuActionTypes {
  IS_CLICK_LINK_MENU = 'IS_CLICK_LINK_MENU'
}

interface IIsClickLinkMenuAction {
  type: MenuActionTypes.IS_CLICK_LINK_MENU,
  payload: boolean
}

export type MenuAction = IIsClickLinkMenuAction