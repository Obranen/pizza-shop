import React, {FC} from 'react'
import {IOrders} from '../../../../../../../store/types/order'
import ProductList from './ProductList/ProductList'
import classes from './Item.module.scss'
import {useUser} from '../../../../../../../hooks/useUser'
import TotalPrice from '../../../../../../common/TotalPrice/TotalPrice'
import {AiOutlineFieldNumber} from 'react-icons/ai'
import {MdDateRange} from 'react-icons/md'

interface IItem {
  order: IOrders
}

const Item: FC<IItem> = ({order}) => {
  const {getUserEmail} = useUser()

  if (getUserEmail() !== order.userEmail) {
    return <></>
  }

  return (
    <div className={classes.order}>
      <div className={classes.info}>
        <div className={classes.numberOrder}>
          <AiOutlineFieldNumber className={classes.icon}/>
          <span className={classes.text}> {order.id}</span>
        </div>
        <div className={classes.timeOrder}>
          <MdDateRange className={classes.icon}/>
          <span className={classes.time}> {order.time}</span>
          <span className={classes.date}> {order.date}</span>
        </div>
      </div>
      <ProductList orderProducts={order}/>
      <TotalPrice totalPrice={order.product} myClasses={{totalPrice: classes.totalPrice, price: classes.price, currency: classes.currency}}/>
    </div>
  )
}

export default Item