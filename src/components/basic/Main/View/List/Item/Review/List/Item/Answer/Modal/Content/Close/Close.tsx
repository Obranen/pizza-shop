import {AiOutlineCloseCircle} from 'react-icons/ai'
import React from 'react'
import {useDispatchHook} from '../../../../../../../../../../../../../hooks/useDispatchHook'
import classes from './Close.module.scss'

const Close = () => {
  const {setIsAnswerActionModal} = useDispatchHook()

  const closeModalAnswerClick = () => {
    setIsAnswerActionModal(false)
  }

  return (
    <AiOutlineCloseCircle className={classes.close} onClick={closeModalAnswerClick}/>
  )
}

export default Close