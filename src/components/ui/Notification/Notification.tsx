import React, { FC, memo, useEffect, useMemo, useState } from 'react'
import classes from './Notification.module.scss'
import { BiErrorAlt } from 'react-icons/bi'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { nanoid } from 'nanoid'

export type AnimationType = 'fade' | 'slide'
export type StyleStateType = 'error' | 'success'

interface INotifications {
  id: string
  text: React.ReactNode | string
}

interface INotification {
  message: React.ReactNode | string
  stateClickOpen: boolean
  stateClickClose: (isShow: boolean) => void
  time?: number
  animation?: AnimationType
  styleState?: StyleStateType
}

const Notification: FC<INotification> = memo(
  ({
    message,
    stateClickClose,
    stateClickOpen,
    time = 2000,
    animation = 'slide',
     styleState = 'error'
  }) => {
    const [notifications, setNotifications] = useState<INotifications[]>([])
    const [stateTimer, setStateTimer] = useState(true)
    const [randomIdArray, setRandomIdArray] = useState<string[]>([])

    const randomId = useMemo(() => {
      return nanoid()
    }, [stateClickOpen]) // eslint-disable-line

    const notifyMouseEnter = () => {
      setStateTimer(false)
    }

    const notifyMouseLeave = () => {
      setStateTimer(true)
    }

    useEffect(() => {
      if (stateClickOpen) {
        setNotifications([...notifications, { id: randomId, text: message }])
        setRandomIdArray([...randomIdArray, randomId])
      }
    }, [stateClickOpen]) // eslint-disable-line

    useEffect(() => {
      let timer: NodeJS.Timeout
      if (stateTimer && notifications.length) {
        timer = setTimeout(() => setNotifications(notifications.slice(1)), time)
        stateClickClose(false)
      }
      return () => {
        clearTimeout(timer)
      }
    }, [notifications, stateTimer]) // eslint-disable-line

    return (
      <TransitionGroup className={classes.wrapper} component={'div'}>
        {notifications.map((notification) => (
          <CSSTransition
            key={notification.id}
            in={stateClickOpen}
            timeout={1000}
            classNames={{
              enterActive:
                animation === 'slide' ? classes.slideIn : classes.fadeIn,
              exitActive:
                animation === 'slide' ? classes.slideOut : classes.fadeOut,
            }}
          >
            <div
              className={styleState === 'error' ? [classes.notification, classes.error].join(' ') : [classes.notification, classes.success].join(' ')}
              onMouseEnter={notifyMouseEnter}
              onMouseLeave={notifyMouseLeave}
              onClick={() =>
                setNotifications(
                  notifications.filter(
                    (notify) => notify.id !== notification.id
                  )
                )
              }
            >
              <div className={classes.groupContent}>
                <BiErrorAlt className={classes.icon} />
                <div className={classes.text}>{notification.text}</div>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  }
)

export default Notification