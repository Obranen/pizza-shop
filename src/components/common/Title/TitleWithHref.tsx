import React, {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatchHook} from '../../../hooks/useDispatchHook'
import classes from './TitleWithHref.module.scss'
import {IProducts} from '../../../utils/data/product'
import {category as dataCategory} from '../../../utils/data/category'

interface ITitleWithHref {
  product: IProducts
  path?: string
  classesTitle?: string
}

const TitleWithHref: FC<ITitleWithHref> = ({product, path= '', classesTitle}) => {
  const {category} = dataCategory
  const {setViewIdActionView, setIsCartActionModal} = useDispatchHook()
  const [textHref, setTextHref] = useState('')

  const titleClick = () => {
    setViewIdActionView(product.id)
    setIsCartActionModal(false)
  }

  const getHref = () => {
    category.forEach((cat) => {
      if (product.category === cat.id) {
        setTextHref(cat.href)
      }
    })
  }

  useEffect(() => {
    getHref()
  }, []) // eslint-disable-line

  return (
    <Link className={[classes.title, classesTitle].join(' ')} onClick={titleClick} to={`${path}${textHref}/${product.id}`}>
      {product.title}
    </Link>
  )
}

export default TitleWithHref