import React from 'react'
import classes from './Checkout.module.scss'
import Button from '../../../../../../ui/Button/Button'
import {useDispatchHook} from '../../../../../../../hooks/useDispatchHook'
import {useSelectorHook} from '../../../../../../../hooks/useSelectorHook'
import {useNavigate} from 'react-router-dom'
import {typesRoutes} from '../../../../../../../pages/typesRoutes'
import {nanoid} from 'nanoid'
import {useDate} from '../../../../../../../hooks/useDate'

const Checkout = () => {
  const {setIsCartActionModal, getOrdersActionOrder, setIsClearActionCart, setIsAuthActionModal, setNotifyActionNotify} = useDispatchHook()
  const {cart, totalPrice} = useSelectorHook(state => state.cart)
  const {view} = useSelectorHook(state => state.view)
  const {createDate, createTime} = useDate()
  const navigate = useNavigate()
  const randomOrderID = nanoid()

  const checkoutClick = () => {
    if (localStorage.getItem('login') === 'true') {
      const newOrders: any = {product: []}
      const newTotalPrice: any = {totalPriceProduct: []}
      const user = JSON.parse(localStorage.getItem('user')!)

      const sorterOrders = () => {
        view.forEach((viewProduct) => {
          cart.forEach((productID) => {
            if (viewProduct.id === productID) {
              newOrders.product.push(viewProduct)
            }
          })
        })
      }
      sorterOrders()

      const sorterTotalPrice = () => {
        totalPrice.forEach((product) => {
          newTotalPrice.totalPriceProduct.push(product)
        })
      }
      sorterTotalPrice()

      getOrdersActionOrder({
        ...newOrders,
        id: randomOrderID,
        date: createDate(),
        time: createTime(),
        userEmail: user.email
      })

      setIsCartActionModal(false)
      setIsClearActionCart(true)
      navigate(typesRoutes.PRIVATE_OFFICE)
    } else {
      setIsCartActionModal(false)
      setIsAuthActionModal(true)
      setNotifyActionNotify({message: 'Авторизуйтесь!', isNotify: true, time: 4000})
    }
  }

  if (cart.length === 0) {
    return <></>
  }

  return (
    <Button
      className={classes.checkout}
      onClick={checkoutClick}
    >
      Оформить
    </Button>
  )
}

export default Checkout