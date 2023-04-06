import React, {FC} from 'react'
import {IProducts} from '../../../../../../../utils/data/product'
import Title from './Title/Title'
import Weight from './Weight/Weight'
import Description from './Description/Description'
import Options from '../../../../../../common/Options/Options'
import {Col} from 'react-flexbox-grid'
import classes from './Column2.module.scss'


interface IColumn2 {
  viewProduct: IProducts
}

const Column2: FC<IColumn2> = ({viewProduct}) => {
  return (
    <Col xs={12} sm={12} md={6}>
      <div className={classes.wrapper1}>
        <Title viewProduct={viewProduct}/>
        <Weight viewProduct={viewProduct}/>
      </div>
      <Description viewProduct={viewProduct}/>
      <Options product={viewProduct}/>
    </Col>
  )
}

export default Column2