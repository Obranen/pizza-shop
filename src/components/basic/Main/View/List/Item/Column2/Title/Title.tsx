import React, {FC} from 'react'
import classes from './Title.module.scss'
import {IProducts} from '../../../../../../../../utils/data/product'

interface ITitle {
  viewProduct: IProducts
}

const Title: FC<ITitle> = ({viewProduct}) => {
  return (
    <span className={classes.title}>
      {viewProduct.title}
    </span>
  )
}

export default Title