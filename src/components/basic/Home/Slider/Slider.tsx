import React from 'react'
import UICarousel from '../../../ui/Carousel/Carousel'
import {Carousel as ContextCarousel} from '../../../../context/Carousel'
import {slider as dataCarousel} from '../../../../utils/data/slider'
import classes from './Slider.module.scss'

const Slider = () => {
  const {carousel, animation, quantityImages} = dataCarousel

  return (
    <div className={classes.slider}>
      <ContextCarousel
        carousel={carousel}
        animation={animation}
        quantityImages={quantityImages}
        myClasses={{imageList: classes.imageList}}
      >
        <UICarousel/>
      </ContextCarousel>
    </div>
  )
}

export default Slider