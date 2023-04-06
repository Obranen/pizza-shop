import React, {FC, useEffect, useState} from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Item.module.scss'
import {IProducts} from '../../../../../../utils/data/product'
import ButtonAddInCart from '../../../../../common/ButtonAddInCart/ButtonAddInCart'
import Image from './Image/Image'
import Title from './Title/Title'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'

interface IItem {
  filterProduct: IProducts
  index: number
}

const Item: FC<IItem> = ({filterProduct, index}) => {
  const [showProduct, setShowProduct] = useState<boolean>(false)
  const {downloadable, pages} = useSelectorHook(state => state.pagination)

  useEffect(() => {
    setShowProduct(true)
  }, [])

  if (downloadable.isDownloadable) {
    if (index + 1 > downloadable.show) {
      return <></>
    }
  }

  if (pages.isPages) {
    if (!(index + 1 > pages.firstIndex && index + 1 <= pages.lastIndex)) {
      return <></>
    }
  }

  return (
    <Col className={showProduct ? classes.productShow : classes.productHide} xs={12} smOffset={2} sm={8} mdOffset={0}
         md={6} lg={4} xl={3}>
      <div className={classes.product}>
        <Image
          filterProduct={filterProduct}
        />
        <div className={classes.content}>
          <Title filterProduct={filterProduct}/>
          <div className={classes.desc}>
            {filterProduct.desc}
          </div>
          <div className={classes.priceWrapper}>
            <span data-id={filterProduct.id} className={classes.price}>
              {filterProduct.price}
            </span> грн
          </div>
          <ButtonAddInCart filterProduct={filterProduct}/>
        </div>
      </div>
    </Col>
  )
}

export default Item