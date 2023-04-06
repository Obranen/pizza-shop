import React, {useContext} from 'react'
import {MdArrowBackIosNew} from 'react-icons/md'
import classes from './ArrowLeft.module.scss'
import {Context} from '../../../../context/Carousel'
import classesCircle from '../Pages/Pages.module.scss'
import classesCircleItem from '../Pages/List/Item/Item.module.scss'
import {useCarousel} from '../../../../hooks/useCarousel'

const ArrowLeft = () => {
  const {setCurrentPage, currentPage, randomId} = useContext(Context)
  const {addedAnimationOut, createArrayPages, removeAnimationOut} = useCarousel()
  const pages = createArrayPages()

  const activeCurrentCircle = () => {
    const $currentPage = document.getElementById(randomId!)!.querySelector(`.${classesCircle.pagesWrapper}`)!.querySelector(`div[data-page="${currentPage}"]`)
    $currentPage!.classList.remove(classesCircleItem.active)
    if ($currentPage!.previousElementSibling === null) {
      $currentPage!.parentElement!.querySelector(`div[data-page="${pages.length}"]`)!.classList.add(classesCircleItem.active)
    } else {
      $currentPage!.previousElementSibling!.classList.add(classesCircleItem.active)
    }
  }

  const arrowLeftClick = () => {
    addedAnimationOut()

    setTimeout(() => {
      removeAnimationOut()
      const current = Number(currentPage)

      if (current === 1) {
        setCurrentPage!(pages.length)
      } else {
        setCurrentPage!(current - 1)
      }

      activeCurrentCircle()
    }, 300)
  }

  return (
    <MdArrowBackIosNew className={classes.arrowLeft} onClick={arrowLeftClick}/>
  )
}

export default ArrowLeft