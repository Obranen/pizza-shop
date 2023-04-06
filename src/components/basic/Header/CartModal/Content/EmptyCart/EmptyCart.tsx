import React from 'react'
import classes from './EmptyCart.module.scss'
import {TiShoppingCart} from 'react-icons/ti'

const EmptyCart = () => {
  return (
    <>
      <div className={classes.emptyCart}>
        <TiShoppingCart className={classes.icon}/>
        <span className={classes.text}>Корзина пустая!</span>
      </div>
    </>
  )
}

export default EmptyCart