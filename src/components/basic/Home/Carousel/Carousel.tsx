import React from 'react'
import UICarousel from '../../../ui/Carousel/Carousel'
import {Carousel as ContextCarousel} from '../../../../context/Carousel'
import {carousel as dataCarousel} from '../../../../utils/data/carousel'
import classes from './Carousel.module.scss'

const Carousel = () => {
  const {carousel, animation, quantityImages} = dataCarousel

  return (
    <div className={classes.wrapper}>
      <div className={classes.main}></div>
      <div className={classes.carousel}>
        <h3 className={classes.title}>Рекомендуемые</h3>
        <ContextCarousel
          carousel={carousel}
          animation={animation}
          quantityImages={quantityImages}
          myClasses={{imageList: classes.imageList}}
        >
          <UICarousel/>
        </ContextCarousel>
      </div>
    </div>
  )
}

export default Carousel