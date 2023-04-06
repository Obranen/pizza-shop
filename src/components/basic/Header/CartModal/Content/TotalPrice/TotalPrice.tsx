import React from 'react'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'
import CommonTotalPrice from '../../../../../common/TotalPrice/TotalPrice'
import classes from './TotalPrice.module.scss'

const TotalPrice = () => {
  const {totalPrice} = useSelectorHook(state => state.cart)

  return (
    <CommonTotalPrice myClasses={{totalPrice: classes.totalPrice}} totalPrice={totalPrice}/>
  )
}

export default TotalPrice