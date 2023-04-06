import React, {useContext} from 'react'
import classes from './Carousel.module.scss'
import ArrowLeft from './ArrowLeft/ArrowLeft'
import ArrowRight from './ArrowRight/ArrowRight'
import Pages from './Pages/Pages'
import Images from './Images/Images'
import {Context} from '../../../context/Carousel'

const Carousel = () => {
  const {randomId} = useContext(Context)

  return (
    <div id={randomId} className={classes.carousel}>
      <ArrowLeft/>
      <Images/>
      <Pages/>
      <ArrowRight/>
    </div>
  )
}

export default Carousel