import React from 'react'
import {BsCartX} from 'react-icons/bs'
import classes from './NoOrders.module.scss'

const NoOrders = () => {
  return (
    <div className={classes.noOrders}>
      <BsCartX className={classes.icon}/>
      <div className={classes.text}>Вы ещё не оформлили ни одного заказа!</div>
    </div>
  )
}

export default NoOrders