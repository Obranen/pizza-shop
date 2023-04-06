import React, {FC} from 'react'
import classes from './Title.module.scss'
import {IProducts} from '../../../../../../../utils/data/product'
import {useDispatchHook} from '../../../../../../../hooks/useDispatchHook'
import {Link} from 'react-router-dom'

interface ITitle {
  filterProduct: IProducts
}

const ProductTitle: FC<ITitle> = ({filterProduct}) => {
    const {setViewIdActionView} = useDispatchHook()

    const linkClick = () => {
      setViewIdActionView(filterProduct.id)
    }
    return (
      <>
        <div className={classes.title}>
          <Link onClick={linkClick} to={`${filterProduct.id}`}>
            <span>{filterProduct.title}</span>
          </Link>
          <span className={classes.weight}>{filterProduct.weight} г</span>
        </div>
      </>
    )
  }

export default ProductTitle