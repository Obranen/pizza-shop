import {RiShoppingBagFill} from 'react-icons/ri'
import classes from './MyOrders.module.scss'
import React from 'react'

const MyOrders = () => {
  return (
    <div className={classes.myOrders}>
      <RiShoppingBagFill className={classes.icon}/>
      <span className={classes.text}>Мои заказы</span>
    </div>
  )
}

export default MyOrders