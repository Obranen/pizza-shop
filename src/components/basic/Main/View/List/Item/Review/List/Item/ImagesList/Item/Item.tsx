import React, {FC, useEffect, useRef, useState} from 'react'
import {IImages} from '../../../../../../../../../../../store/types/review'
import classes from './Item.module.scss'

interface IItem {
  image: IImages
  index: number
}

const Item: FC<IItem> = ({image, index}) => {
  const [widthWindow, setWidthWindow] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)
  const size = Math.floor(image.size / 1000)

  const imageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const $target = e.currentTarget
    if (imgRef.current!.classList.contains(classes.scale)) {
      imgRef.current!.classList.remove(classes.scale)
      $target.classList.add(classes.image)
      if ($target.classList.contains(classes.prevImage)) {
        $target.classList.remove(classes.prevImage)
      }
    } else {
      imgRef.current!.classList.add(classes.scale)
      $target.classList.remove(classes.image)
      $target.classList.add(classes.prevImage)
    }
  }

  useEffect(() => {
    setWidthWindow(window.window.screen.width)
  }, [])

  return (
    <div onClick={widthWindow >= 576 ? imageClick : () => {}} className={classes.image}>
      <div className={classes.group3}>
        <div className={classes.group4}>
          <div className={classes.number}>{index + 1}</div>
          <div className={classes.size}>{size}кб</div>
        </div>
      </div>
      <img className={classes.img} ref={imgRef} src={image.url} alt={image.name}/>
      <div className={classes.group1}>
        <div className={classes.group2}>
          <div className={classes.name}>{image.name}</div>
        </div>
      </div>
    </div>
  )
}

export default Item