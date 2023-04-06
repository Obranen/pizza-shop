import React, {FC} from 'react'
import Price from '../../../../../../common/Price/Price'
import Quantity from '../../../../../../common/Quantity/Quantity'
import ButtonAddInCart from '../../../../../../common/ButtonAddInCart/ButtonAddInCart'
import {Col} from 'react-flexbox-grid'
import {IProducts} from '../../../../../../../utils/data/product'
import classes from './Column3.module.scss'

interface IColumn3 {
  viewProduct: IProducts
}

const Column3: FC<IColumn3> = ({viewProduct}) => {
  return (
    <Col xs={12} sm={12} md={3}>
      <div className={classes.wrapper1}>
        <Price product={viewProduct}/>
        <Quantity product={viewProduct}/>
      </div>
      <ButtonAddInCart myClasses={classes.button} filterProduct={viewProduct}/>
    </Col>
  )
}

export default Column3