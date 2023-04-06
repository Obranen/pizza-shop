import React from 'react'
import classes from './Continue.module.scss'
import Button from '../../../../../../ui/Button/Button'
import {useDispatchHook} from '../../../../../../../hooks/useDispatchHook'
import {useSelectorHook} from '../../../../../../../hooks/useSelectorHook'

const Continue = () => {
  const {setIsCartActionModal} = useDispatchHook()
  const {cart} = useSelectorHook(state => state.cart)

  const continueClick = () => {
    setIsCartActionModal(false)
  }
  return (
    <Button
      className={cart.length === 0 ? classes.noProducts : classes.continue}
      onClick={continueClick}
    >
      закрыть
    </Button>
  )
}

export default Continue