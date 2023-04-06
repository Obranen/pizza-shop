import React, {FC} from 'react'
import classes from './Item.module.scss'
import Quantity from '../../../../../../common/Quantity/Quantity'
import DeleteProduct from './DeleteProduct/DeleteProduct'
import Price from '../../../../../../common/Price/Price'
import Options from '../../../../../../common/Options/Options'
import {useSelectorHook} from '../../../../../../../hooks/useSelectorHook'
import TitleWithHref from '../../../../../../common/Title/TitleWithHref'
import Image from './Image/Image'
import {IProducts} from '../../../../../../../utils/data/product'

interface IItem {
  viewProduct: IProducts
}

const Item: FC<IItem> = ({viewProduct}) => {
  const {cart} = useSelectorHook(state => state.cart)

  if (!(cart.includes(viewProduct.id))) {
    return <></>
  }

  return (
    <div className={classes.wrapperProduct}>
      <div className={classes.product}>
        <div>
          <TitleWithHref classesTitle={classes.title} product={viewProduct}/>
          <Image viewProduct={viewProduct}/>
        </div>
        <DeleteProduct productId={viewProduct.id!}/>
        <div className={classes.group1}>
          <Price myClasses={{wrapper: classes.wrapperPrice}} product={viewProduct}/>
          <div className={classes.quantity}>
            <Quantity product={viewProduct}/>
          </div>
        </div>
      </div>
      <div className={classes.wrapperOption}>
        <Options myClasses={{checkbox: classes.checkboxLabel}} product={viewProduct}/>
      </div>
    </div>
  )
}

export default Item