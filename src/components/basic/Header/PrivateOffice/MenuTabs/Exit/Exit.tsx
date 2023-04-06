import React from 'react'
import {useDispatchHook} from '../../../../../../hooks/useDispatchHook'
import {useNavigate} from 'react-router-dom'
import {typesRoutes} from '../../../../../../pages/typesRoutes'
import {ImExit} from 'react-icons/im'
import classes from './Exit.module.scss'

const Exit = () => {
  const {setIsAuthActionAuth, setIsAuthActionModal, setNotifyActionNotify} = useDispatchHook()
  const navigate = useNavigate()

  const exitClick = () => {
    localStorage.setItem(`login`, JSON.stringify(false))
    setIsAuthActionAuth(false)
    navigate(typesRoutes.HOME)
    setIsAuthActionModal(false)
    setNotifyActionNotify({message: 'Вы вышли с личного кабинета', isNotify: true, styleState: 'success', time: 4000})
  }

  return (
    <div className={classes.exit} onClick={exitClick}>
      <ImExit className={classes.icon}/>
      <span className={classes.text}>Выход</span>
    </div>
  )
}

export default Exit