import React, {FC} from 'react'
import {IProducts} from '../../../../../utils/data/product'
import Item from './Item/Item'
import {optionsCat as dataOptionsCat} from '../../../../../utils/data/optionsCat'

interface IList {
  product: IProducts
}

const List: FC<IList> = ({product}) => {
  const {optionsCat} = dataOptionsCat

  return (
    <>
      {optionsCat.map((optionCat) => (
        <Item
          product={product}
          optionCat={optionCat}
          key={optionCat.id}
        />
      ))}
    </>
  )
}

export default List