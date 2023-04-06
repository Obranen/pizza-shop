import React from 'react'
import classes from './Close.module.scss'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {useDispatchHook} from '../../../../../../hooks/useDispatchHook'

const Close = () => {
  const {setIsAuthActionModal} = useDispatchHook()

  const closeClick = () => {
    setIsAuthActionModal(false)
  }

  return (
    <AiOutlineCloseCircle className={classes.close} onClick={closeClick}/>
  )
}

export default Close