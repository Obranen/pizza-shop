import React, {FC, useEffect, useState} from 'react'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'
import Item from './Item/Item'
import {useUser} from '../../../../../../hooks/useUser'
import NoOrders from './NoOrders/NoOrders'

interface IOrderLIst {}

const OrderLIst: FC<IOrderLIst> = ({}) => {
  const {orders} = useSelectorHook(state => state.order)
  const [isCheckEmail, setIsCheckEmail] = useState(false)
  const {getUserEmail} = useUser()

  const checkEmail = () => {
    orders.forEach((order) => {
      if (getUserEmail() === order.userEmail) {
        setIsCheckEmail(true)
      }
    })
  }

  useEffect(() => {
    checkEmail()
  }, [orders])

  if (orders.length === 0) {
    return <NoOrders/>
  }

  if (!isCheckEmail) {
    return <NoOrders/>
  }

  return (
    <>
      {orders.map((order) =>
        <Item
          key={order.id}
          order={order}
        />
      )}
    </>
  )
}

export default OrderLIst