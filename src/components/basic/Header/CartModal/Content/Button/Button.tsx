import React from 'react'
import classes from './Button.module.scss'
import Checkout from './Checkout/Checkout'
import Continue from './Continue/Continue'


const Button = () => {

  return (
    <div className={classes.groupButton}>
      <Checkout/>
      <Continue/>
    </div>
  )
}

export default Button