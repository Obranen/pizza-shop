import React, {FC} from 'react'
import {IProducts} from '../../../../utils/data/product'
import List from './List/List'

interface ITitle {
  product: IProducts
}

const Title: FC<ITitle> = ({product}) => {
  return (
    <div>
      <List product={product}/>
    </div>
  )
}

export default Title