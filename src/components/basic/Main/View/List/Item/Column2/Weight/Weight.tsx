import React, {FC} from 'react'
import {IProducts} from '../../../../../../../../utils/data/product'
import classes from './Weight.module.scss'
import {GiWeight} from 'react-icons/gi'

interface IWeight {
  viewProduct: IProducts
}

const Weight: FC<IWeight> = ({viewProduct}) => {
  return (
    <span className={classes.weight}>
      <span className={classes.icon}>
        <GiWeight/>
      </span>
      <span className={classes.text}>
        {viewProduct.weight}
      </span>
      <span className={classes.currency}>г</span>
    </span>
  )
}

export default Weight