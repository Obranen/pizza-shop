import React, {FC, useEffect, useState} from 'react'
import {IOptionsCat} from '../../../../../../utils/data/optionsCat'
import {IProducts} from '../../../../../../utils/data/product'
import classes from './Item.module.scss'

interface IItem {
  product: IProducts
  optionCat: IOptionsCat
}

const Item: FC<IItem> = ({product, optionCat}) => {
  const [titleOptionCat, setTitleOptionCat] = useState('')

  useEffect(() => {
    product.options.forEach((category) => {
      if (optionCat.id === category.category) {
        setTitleOptionCat(optionCat.title)
      }
    })
  }, []) // eslint-disable-line

  return (
    <h3 className={classes.title}>{titleOptionCat}</h3>
  )
}

export default Item