import {INotifyState, NotifyActionTypes} from '../types/notify'

const initialState: INotifyState = {
  notify: {
    message: '',
    isNotify: false,
    time: 2000,
    styleState: 'error',
    animation: 'slide'
  }
}

export const notify = (state = initialState, action: any): INotifyState => {
  switch (action.type) {
    case NotifyActionTypes.SET_NOTIFY_NOTIFY:
      return {
        ...state,
        notify: action.payload
      }
    default: return state
  }
}