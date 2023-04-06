import {IProducts} from '../../utils/data/product'

export interface IViewState {
  view: IProducts[]
  viewId: number | null
}

export enum ViewActionTypes {
  GET_VIEW_VIEW = 'GET_VIEW_VIEW',
  SET_VIEW_VIEW = 'SET_VIEW_VIEW',
  SET_VIEW_ID_VIEW = 'SET_VIEW_ID_VIEW'
}

interface IGetViewAction {
  type: ViewActionTypes.GET_VIEW_VIEW,
  payload: IProducts[]
}

interface ISetViewAction {
  type: ViewActionTypes.SET_VIEW_VIEW,
  payload: IProducts
}

interface ISetViewIdAction {
  type: ViewActionTypes.SET_VIEW_ID_VIEW,
  id: number
}

export type ViewAction = ISetViewIdAction | IGetViewAction | ISetViewAction