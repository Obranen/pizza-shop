import React, {FC} from 'react'
import List from './List/List'
import {IProducts} from '../../../utils/data/product'
import classes from './Options.module.scss'
import Title from './Title/Title'

export interface ImyClasses {
  checkbox?: string
}

interface IOptionsProduct {
  product: IProducts
  myClasses?: ImyClasses
}

const Options: FC<IOptionsProduct> = ({product, myClasses }) => {
  return (
    <div className={classes.wrapperCheckbox}>
      <Title product={product}/>
      <List product={product} myClasses={myClasses}/>
    </div>
  )
}

export default Options