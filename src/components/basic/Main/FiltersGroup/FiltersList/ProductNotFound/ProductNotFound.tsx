import React from 'react'
import classes from './ProductNotFound.module.scss'
import {BsEmojiFrown} from 'react-icons/bs'

const ProductNotFound = () => {
  return (
    <div className={classes.productNotFound}>
      <BsEmojiFrown className={classes.icon}/>
      <div className={classes.text}>Товар не найден!</div>
    </div>
  )
}

export default ProductNotFound