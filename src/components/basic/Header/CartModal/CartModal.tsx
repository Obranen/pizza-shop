import React from 'react'
import classes from './CartModal.module.scss'
import UIModal from '../../../ui/Modal/Modal'
import Content from './Content/Content'
import {useSelectorHook} from '../../../../hooks/useSelectorHook'
import {useDispatchHook} from '../../../../hooks/useDispatchHook'
import Link from './Link/Link'

const CartModal = () => {
  const {isCart} = useSelectorHook(state => state.modal)
  const {setIsCartActionModal} = useDispatchHook()

  const cartClick = () => {
    setIsCartActionModal(true)
  }

  return (
    <div onClick={cartClick} className={classes.cart}>
      <UIModal
        closeOutOfContent={false}
        nameLink={<Link/>}
        isActiveModal={isCart}
        showClose={false}
        myClass={{content: classes.content}}
      >
        <Content/>
      </UIModal>
    </div>
  )
}

export default CartModal