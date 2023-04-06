import React, {FC} from 'react'
import classes from './Quantity.module.scss'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {useDispatchHook} from '../../../hooks/useDispatchHook'
import {IProducts} from '../../../utils/data/product'

interface IQuantity {
  product: IProducts
}

const Quantity: FC<IQuantity> = ({product}) => {
  const {setViewActionView} = useDispatchHook()

  const update = (value: number) => {
    setViewActionView({
      ...product,
      quantity: value
    })
  }

  const quantityChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const $target = e.currentTarget
    const onlyNumber = /\d+/.test(String(Number($target.value)))
    if (onlyNumber && Number($target.value) < 1000) {
      update(Number($target.value))
    }
  }

  const minusClick = () => {
    if (product.quantity !== undefined && product.quantity > 1) {
      const sumSubtraction = Number(product.quantity) - 1
      update(Number(sumSubtraction))
    }
  }

  const plusClick = () => {
    if (Number(product.quantity) < 999) {
      const sumAddition = Number(product.quantity) + 1
      update(Number(sumAddition))
    }
  }

  return (
    <div className={classes.quantityWrapper}>
      <div className={classes.quantityGroup}>
          <span onClick={minusClick} className={classes.quantityMinus}>
            <BiMinus/>
          </span>
        <span className={classes.quantity}>
            <textarea onChange={quantityChange} value={product.quantity}></textarea>
          </span>
        <span onClick={plusClick} className={classes.quantityPlus}>
            <BiPlus/>
          </span>
      </div>
    </div>
  )
}

export default Quantity