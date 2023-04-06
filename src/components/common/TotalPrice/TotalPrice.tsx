import React, {FC, useEffect, useState} from 'react'
import classes from './TotalPrice.module.scss'
import {setIsClearActionCart} from '../../../store/actions/cart'
import {ITotalPrice} from '../../../store/types/cart'
import {useAnimateNumber} from '../../../hooks/useAnimateNumber'

interface IMyClasses {
  totalPrice?: string
  price?: string
  currency?: string
}

interface ITotalPriceCart {
  totalPrice: ITotalPrice[]
  myClasses?: IMyClasses
}

const TotalPrice: FC<ITotalPriceCart> = ({totalPrice, myClasses}) => {
  const [commonPrice, setCommonPrice] = useState(0)
  const [optionPrice, setOptionPrice] = useState(0)
  const {resultAnimateNumber} = useAnimateNumber(commonPrice + optionPrice)

  const calculationPrice = () => {
    const prices = totalPrice.map((product) =>
      Number(product.price * product.quantity)
    )
    const sumPrice = prices.reduce((a: number, b: number) => {
      return (a + b)
    })
    setCommonPrice(sumPrice)
  }

  const calculationOptionPrice = () => {
    const arr: number[] = []

    const additionOfNumbers = () => {
      totalPrice.forEach((product) => {
        product.options.forEach((option) => {
          if (option.checked) {
            arr.push(Number(option.price))
          }
        })
      })

      if (arr.length !== 0) {
        const sumPrice = arr.reduce((a: number, b: number) => {
          return (a + b)
        })
        setOptionPrice(sumPrice)
      } else {
        setOptionPrice(0)
      }
    }
    additionOfNumbers()
  }

  useEffect(() => {
    if (totalPrice.length !== 0) {
      calculationPrice()
      calculationOptionPrice()
    }
  }, [totalPrice, setIsClearActionCart]) // eslint-disable-line


  if (totalPrice.length === 0) {
    return <></>
  }

  return (
    <div className={[classes.totalPrice, myClasses?.totalPrice].join(' ')}>
      <span className={[classes.price, myClasses?.price].join(' ')}>{resultAnimateNumber} </span>
      <span className={[classes.currency, myClasses?.currency].join(' ')}>грн</span>
    </div>
  )
}

export default TotalPrice