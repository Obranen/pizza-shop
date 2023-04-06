export interface IDownloadable {
  isDownloadable: boolean
  start: number
  show: number
  upload: number
}

export interface IPages {
  isPages: boolean
  lastIndex: number
  firstIndex: number
}

export interface IPaginationState {
  downloadable: IDownloadable
  pages: IPages
}

export enum PaginationActionTypes {
  SET_SHOW_PAGINATION = 'SET_SHOW_PAGINATION',
  SET_LAST_INDEX_PAGINATION = 'SET_LAST_INDEX_PAGINATION',
  SET_FIRST_INDEX_PAGINATION = 'SET_FIRST_INDEX_PAGINATION',
}

interface ISetShowAction {
  type: PaginationActionTypes.SET_SHOW_PAGINATION,
  payload: number
}

interface ISetLastIndexAction {
  type: PaginationActionTypes.SET_LAST_INDEX_PAGINATION,
  payload: number
}

interface ISetFirstIndexAction {
  type: PaginationActionTypes.SET_FIRST_INDEX_PAGINATION,
  payload: number
}

export type PaginationAction = ISetShowAction | ISetLastIndexAction | ISetFirstIndexAction