import Notification from '../../ui/Notification/Notification'
import React from 'react'
import {useSelectorHook} from '../../../hooks/useSelectorHook'
import {useDispatchHook} from '../../../hooks/useDispatchHook'

const Notify = () => {
  const {notify} = useSelectorHook(state => state.notify)
  const {setNotifyActionNotify} = useDispatchHook()

  const stateClickClose = (isClose: boolean) => {
    setNotifyActionNotify({...notify, isNotify: isClose})
  }

  return (
    <Notification
      message={notify.message}
      time={notify.time}
      animation={notify.animation}
      styleState={notify.styleState}
      stateClickOpen={notify.isNotify}
      stateClickClose={stateClickClose}
    />
  )
}

export default Notify