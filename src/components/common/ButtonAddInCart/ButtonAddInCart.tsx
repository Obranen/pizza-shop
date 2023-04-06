import React, {FC, useEffect, useRef} from 'react'
import classes from './ButtonAddInCart.module.scss'
import Button from '../../ui/Button/Button'
import {useDispatchHook} from '../../../hooks/useDispatchHook'
import {useSelectorHook} from '../../../hooks/useSelectorHook'
import {IProducts} from '../../../utils/data/product'

interface IButtonAddInCart {
  filterProduct: IProducts
  myClasses?: string
}

const ButtonAddInCart: FC<IButtonAddInCart> = ({filterProduct, myClasses}) => {
  const {setIsCartActionModal, getCartActionCart, setClearClassesActionCart, getTotalPriceActionCart, setIsClearActionCart} = useDispatchHook()
  const {deleteProduct, cart, isClear} = useSelectorHook(state => state.cart)
  const {view} = useSelectorHook(state => state.view)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const addInCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const $target = e.currentTarget
    const isButtonClass = $target.classList.contains(classes.addedInCart)

    if (isButtonClass) {
      setIsCartActionModal(true)
    } else {
      $target.innerHTML = 'Просмотреть корзину'
      $target.classList.add(classes.addedInCart)

      view.forEach(viewProduct => {
        if (viewProduct.id === filterProduct.id) {
          getCartActionCart(viewProduct.id)
          getTotalPriceActionCart({
            id: viewProduct.id,
            price: viewProduct.price,
            quantity: viewProduct.quantity,
            options: viewProduct.options
          })
        }
      })
    }
  }

  const pageReloadViewCart = () => {
    if (cart.includes(filterProduct.id)) {
      buttonRef.current!.innerHTML = 'Просмотреть корзину'
      buttonRef.current!.classList.add(classes.addedInCart)
    }
  }

  const pageReloadDeletedProduct = () => {
    if (isClear) {
      const isButtonClass = buttonRef.current!.classList.contains(classes.addedInCart)
      if (isButtonClass) {
        buttonRef.current!.classList.remove(classes.addedInCart)
        buttonRef.current!.innerHTML = 'Добавить в корзину'
      }
      setIsClearActionCart(false)
    } else {
      if (deleteProduct !== null) {
        if (filterProduct.id === deleteProduct) {
          buttonRef.current!.classList.remove(classes.addedInCart)
          buttonRef.current!.innerHTML = 'Добавить в корзину'
          setClearClassesActionCart(null)
        }
      }
    }
  }

  useEffect(() => {
    pageReloadViewCart()
  }, []) // eslint-disable-line

  useEffect(() => {
    pageReloadDeletedProduct()
  }, [deleteProduct, filterProduct.id, setClearClassesActionCart]) // eslint-disable-line

  return (
    <Button innerRef={buttonRef} className={[classes.button, myClasses].join(' ')} onClick={addInCartClick}>
      Добавить в корзину
    </Button>
  )
}

export default ButtonAddInCart