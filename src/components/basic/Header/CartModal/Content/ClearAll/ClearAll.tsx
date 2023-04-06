import React from 'react'
import {useDispatchHook} from '../../../../../../hooks/useDispatchHook'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'
import {BsFillCartXFill} from 'react-icons/bs'
import Button from '../../../../../ui/Button/Button'
import classes from './ClearAll.module.scss'

const ClearAll = () => {
  const {cart} = useSelectorHook(state => state.cart)
  const {setIsClearActionCart} = useDispatchHook()

  const allClearClick = () => {
    setIsClearActionCart(true)
  }

  if (cart.length === 0) {
    return <></>
  }
  return (
    <Button className={classes.button} onClick={allClearClick}>
      <BsFillCartXFill className={classes.icon}/>
      <span className={classes.text}>
        Очистить корзину
      </span>
    </Button>
  )
}

export default ClearAll