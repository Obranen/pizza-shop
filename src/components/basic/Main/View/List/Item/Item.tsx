import React, { FC } from 'react'
import { IProducts } from '../../../../../../utils/data/product'
import { useSelectorHook } from '../../../../../../hooks/useSelectorHook'
import classes from './Item.module.scss'
import { Row } from 'react-flexbox-grid'
import Image from './Image/Image'
import Column2 from './Column2/Column2'
import Column3 from './Column3/Column3'
import Review from './Review/Review'

interface IItem {
  viewProduct: IProducts
}

const Item: FC<IItem> = ({ viewProduct }) => {
  const { viewId } = useSelectorHook((state) => state.view)

  if (viewProduct.id !== viewId) {
    return <></>
  }

  return (
    <>
      <Row className={classes.item}>
        <Image viewProduct={viewProduct} />
        <Column2 viewProduct={viewProduct} />
        <Column3 viewProduct={viewProduct} />
      </Row>
      <Review />
    </>

  )
}

export default Item
