import React, {FC} from 'react'
import Title from '../../../../../../../../../common/Options/Title/Title'
import {IProducts} from '../../../../../../../../../../utils/data/product'
import classes from './Options.module.scss'

interface IOptions {
  product: IProducts
}

const Options: FC<IOptions> = ({product}) => {
  return (
    <div className={classes.wrapper}>
      <Title product={product}/>
      {product.options.map((option) =>
        <div key={option.id} className={classes.option}>
          {option.checked &&
            <>
              <span className={classes.name}>{option.name}</span>
              :
              <span className={classes.price}> {option.price} грн</span>
            </>
          }
        </div>
      )}
    </div>
  )
}

export default Options