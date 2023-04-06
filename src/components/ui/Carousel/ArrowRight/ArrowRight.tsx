import React, {useContext} from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
import classes from './ArrowRight.module.scss'
import classesCircle from '../Pages/Pages.module.scss'
import classesCircleItem from '../Pages/List/Item/Item.module.scss'
import {Context} from '../../../../context/Carousel'
import {useCarousel} from '../../../../hooks/useCarousel'

const ArrowRight = () => {
  const {currentPage, setCurrentPage, randomId} = useContext(Context)
  const {addedAnimationOut, createArrayPages, removeAnimationOut} = useCarousel()
  const pages = createArrayPages()

  const activeCurrentCircle = () => {
    const $currentImage = document.getElementById(randomId!)!.querySelector(`.${classesCircle.pagesWrapper}`)!.querySelector(`div[data-page="${currentPage}"]`)
    $currentImage!.classList.remove(classesCircleItem.active)
    if ($currentImage!.nextElementSibling === null) {
      $currentImage!.parentElement!.querySelector(`div[data-page="${1}"]`)!.classList.add(classesCircleItem.active)
    } else {
      $currentImage!.nextElementSibling!.classList.add(classesCircleItem.active)
    }
  }

  const arrowRightClick = () => {
    addedAnimationOut()

    setTimeout(() => {
      removeAnimationOut()
      const current = Number(currentPage)

      if (current === pages.length) {
        setCurrentPage!(1)
      } else {
        setCurrentPage!(current + 1)
      }

      activeCurrentCircle()
    }, 300)
  }

  return (
    <MdArrowForwardIos className={classes.arrowRight} onClick={arrowRightClick}/>
  )
}

export default ArrowRight