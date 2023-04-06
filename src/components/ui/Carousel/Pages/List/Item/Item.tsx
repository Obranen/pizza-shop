import React, {FC, useContext, useEffect, useRef} from 'react'
import classes from './Item.module.scss'
import {Context} from '../../../../../../context/Carousel'
import {useCarousel} from '../../../../../../hooks/useCarousel'

interface IItem {
  page: number
}

const Item: FC<IItem> = ({page}) => {
  const {setCurrentPage} = useContext(Context)
  const imageRef = useRef<HTMLDivElement>(null)
  const {addedAnimationOut, removeAnimationOut} = useCarousel()

  const circleItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const $target = event.currentTarget
    addedAnimationOut()

    const timer = setTimeout(() => {
      $target.parentElement!.querySelector(`.${classes.active}`)!.classList.remove(classes.active)
      $target.classList.add(classes.active)
      removeAnimationOut()
      setCurrentPage!(page)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }

  useEffect(() => {
    if (page === 1) {
      imageRef.current!.classList.add(classes.active)
    }
  }, []) // eslint-disable-line

  return (
    <div ref={imageRef} data-page={page} className={classes.page} onClick={circleItemClick}></div>
  )
}

export default Item