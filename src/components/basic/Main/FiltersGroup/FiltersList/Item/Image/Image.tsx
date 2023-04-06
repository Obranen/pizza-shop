import React, {FC} from 'react'
import classes from './Image.module.scss'
import {IProducts} from '../../../../../../../utils/data/product'
import {useDispatchHook} from '../../../../../../../hooks/useDispatchHook'
import {Link} from 'react-router-dom'

interface IImage {
  filterProduct: IProducts
}

const Image: FC<IImage> =
  ({filterProduct}) => {
  const {setViewIdActionView} = useDispatchHook()

  const linkClick = () => {
    setViewIdActionView(filterProduct.id)
  }
    return (
      <Link
        onClick={linkClick}
        className={classes.imageLink}
        to={`${filterProduct.id}`}>
        <img
          className={classes.image}
          src={filterProduct.image.src}
          alt={filterProduct.image.alt}
        />
      </Link>
    )
  }

export default Image