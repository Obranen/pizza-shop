import React from 'react'
import classes from './Content.module.scss'
import TotalPrice from './TotalPrice/TotalPrice'
import List from './List/List'
import Button from './Button/Button'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'
import EmptyCart from './EmptyCart/EmptyCart'
import ClearAll from './ClearAll/ClearAll'


const Content = () => {
  const {cart} = useSelectorHook(state => state.cart)

  return (
    <div className={cart.length === 0 ? [classes.content, classes.empty].join(' ') : classes.content}>
      <h3 className={classes.title}>Корзина</h3>
      <ClearAll/>
      {cart.length === 0 ? <EmptyCart/> : <List/>}
      <TotalPrice/>
      <Button/>
    </div>
  )
}

export default Content