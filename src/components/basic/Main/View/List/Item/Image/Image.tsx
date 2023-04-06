import React, {FC} from 'react'
import {Col} from 'react-flexbox-grid'
import {IProducts} from '../../../../../../../utils/data/product'
import classes from './Image.module.scss'

interface IImage {
  viewProduct: IProducts
}

const Image: FC<IImage> = ({viewProduct}) => {
  return (
    <Col xs={12} sm={12} md={3}>
      <div className={classes.wrapperImage}>
        <img src={viewProduct.image.src} alt={viewProduct.image.alt}/>
      </div>
    </Col>
  )
}

export default Image