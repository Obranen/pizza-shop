import React, {FC} from 'react'
import Item from './Item/Item'
import {IOrders} from '../../../../../../../../store/types/order'

interface IProductList {
  orderProducts: IOrders
}

const ProductList: FC<IProductList> = ({orderProducts}) => {
  return (
    <>
      {orderProducts.product.map((product) =>
        <Item
          key={product.id}
          product={product}
        />
      )}
    </>
  )
}

export default ProductList