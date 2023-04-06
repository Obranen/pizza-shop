import {INotify, NotifyAction, NotifyActionTypes} from '../types/notify'

export const setNotifyActionNotify = (notify: INotify): NotifyAction => {
  return {type: NotifyActionTypes.SET_NOTIFY_NOTIFY, payload: notify}
}