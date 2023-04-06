import React from 'react'
import {AnimationType, StyleStateType} from '../../components/ui/Notification/Notification'

export interface INotify {
  message: React.ReactNode | string
  isNotify: boolean
  time?: number
  animation?: AnimationType
  styleState?: StyleStateType
}

export interface INotifyState {
  notify: INotify
}

export enum NotifyActionTypes {
  SET_NOTIFY_NOTIFY = 'SET_NOTIFY_NOTIFY'
}

interface ISetNotifyAction {
  type: NotifyActionTypes.SET_NOTIFY_NOTIFY,
  payload: INotify
}

export type NotifyAction = ISetNotifyAction