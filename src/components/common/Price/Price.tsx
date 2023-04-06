import React, {FC, useEffect, useMemo, useState} from 'react'
import classes from './Price.module.scss'
import {IProducts} from '../../../utils/data/product'
import {useDispatchHook} from '../../../hooks/useDispatchHook'
import {useAnimateNumber} from '../../../hooks/useAnimateNumber'

interface IMyClasses {
  wrapper?: string
  price?: string
  currency?: string
}

interface IPrice {
  product: IProducts
  myClasses?: IMyClasses
}

const Price: FC<IPrice> = ({product, myClasses}) => {
  const {setTotalPriceActionCart} = useDispatchHook()
  const {resultAnimateNumber} = useAnimateNumber(product.price * product.quantity)

  useEffect(() => {
    setTotalPriceActionCart({
      id: product.id,
      price: product.price,
      quantity: product.quantity,
      options: product.options
    })
  }, [product.quantity]) // eslint-disable-line

  return (
    <div className={[classes.wrapper, myClasses?.wrapper].join(' ')}>
      <span className={[classes.price, myClasses?.price].join(' ')}>{resultAnimateNumber}</span>
      <span className={[classes.currency, myClasses?.currency].join(' ')}>грн</span>
    </div>
  )
}

export default Price