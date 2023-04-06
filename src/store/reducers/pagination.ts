import {IPaginationState, PaginationActionTypes} from '../types/pagination';

const initialState: IPaginationState = {
  downloadable: {
    isDownloadable: true,
    start: 8,
    show: 8,
    upload: 8,
  },
  pages: {
    isPages: false,
    lastIndex: 4,
    firstIndex: 0,
  }
}

export const pagination = (state = initialState, action: any): IPaginationState => {
  switch (action.type) {
    case PaginationActionTypes.SET_SHOW_PAGINATION:
      return {
        ...state,
        downloadable: {...state.downloadable, show: action.payload}
      }
    case PaginationActionTypes.SET_LAST_INDEX_PAGINATION:
      return {
        ...state,
        pages: {...state.pages, lastIndex: action.payload}
      }
    case PaginationActionTypes.SET_FIRST_INDEX_PAGINATION:
      return {
        ...state,
        pages: {...state.pages, firstIndex: action.payload}
      }
    default:
      return state
  }
}