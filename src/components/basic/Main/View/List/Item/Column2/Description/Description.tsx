import React, {FC} from 'react'
import classes from './Description.module.scss'
import {IProducts} from '../../../../../../../../utils/data/product'

interface IDescription {
  viewProduct: IProducts
}

const Description: FC<IDescription> = ({viewProduct}) => {
  return (
    <div className={classes.description}>
      {viewProduct.desc}
    </div>
  )
}

export default Description