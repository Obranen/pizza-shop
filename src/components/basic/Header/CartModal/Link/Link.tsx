import React from 'react'
import classes from './Link.module.scss'
import {TiShoppingCart} from 'react-icons/ti'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'

const Link = () => {
  const {cart} = useSelectorHook(state => state.cart)

  return (
    <div className={classes.wrapperIcon}>
      <span className={classes.quantity}>
        {cart.length}
      </span>
      <span className={classes.icon}>
        <TiShoppingCart/>
      </span>
    </div>
  )
}

export default Link