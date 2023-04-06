import React, {FC} from 'react'

import classes from './Image.module.scss'
import {IProducts} from '../../../../../../../../utils/data/product'

interface IImage {
  viewProduct: IProducts
}

const Image: FC<IImage> = ({viewProduct}) => {
  return (
    <div className={classes.image}>
      <img src={viewProduct.image!.src} alt={viewProduct.image!.alt}/>
    </div>
  )
}

export default Image