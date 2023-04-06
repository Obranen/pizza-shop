import React, {FC} from 'react'
import {IProducts} from '../../../../utils/data/product'
import Item from './Item/Item'
import classes from './List.module.scss'
import {ImyClasses} from '../Options'

interface IList {
  product: IProducts
  myClasses?: ImyClasses
}

const List: FC<IList> = ({product, myClasses}) => {
  return (
    <div className={classes.checkboxWrapper}>
      {product.options.map((activeOption) =>
        <Item
          product={product}
          activeOption={activeOption}
          key={activeOption.id}
          myClasses={myClasses}
        />
      )}
    </div>
  )
}

export default List