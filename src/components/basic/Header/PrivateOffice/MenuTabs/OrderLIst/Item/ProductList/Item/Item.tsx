import React, {FC} from 'react'
import {IProducts} from '../../../../../../../../../utils/data/product'
import classes from './Item.module.scss'
import TitleWithHref from '../../../../../../../../common/Title/TitleWithHref'
import {Col} from 'react-flexbox-grid'
import Options from './Options/Options'
import {GiPriceTag} from 'react-icons/gi'

interface IItem {
  product: IProducts
}

const Item: FC<IItem> = ({product}) => {
  return (
    <div className={classes.wrapper}>
      <Col sm={12} lg={12} xl={4}>
        <div className={classes.wrapperTitle}>
          <TitleWithHref path={'../'} product={product} classesTitle={classes.title}/>
          <div className={classes.weight}>{product.weight} г</div>
        </div>
      </Col>
      <div className={classes.product}>
        <Col sm={12} lg={4}>
          <div className={classes.image}>
            <img src={product.image.src} alt={product.image.alt}/>
          </div>
        </Col>

        <Col sm={12} lg={4} className={classes.wrapperOption}>
          <Options product={product} />
        </Col>

        <Col sm={12} lg={4} className={classes.wrapperPrice}>
          <div className={classes.groupPrice}>
            <GiPriceTag className={classes.icon}/>
            <span className={classes.price}>{product.price} <span className={classes.currency}>грн</span></span>
          </div>
          <div className={classes.groupQuantity}>
            <span className={classes.text}>Количество: </span>
            <span className={classes.quantity}>{product.quantity}</span>
          </div>
        </Col>
      </div>
    </div>
  )
}

export default Item