import React, {FC} from 'react'
import {IImages} from '../../UploadFile'
import classes from './Item.module.scss'

interface IItem {
  imageData: IImages
  index: number
  arrImages: IImages[]
  setImages: (arr: IImages[]) => void
}

const Item: FC<IItem> = ({imageData, index, arrImages, setImages}) => {
  const size = Math.floor(imageData.size / 1000)

  return (
    <div className={classes.image}>
      <div className={classes.group3}>
        <div className={classes.group4}>
          <div className={classes.number}>{index + 1}</div>
          <div
            onClick={() => setImages(arrImages.filter((img) => img.id !== imageData.id))}
            className={classes.delete}
            data-id={imageData.id}
          >Удалить</div>
        </div>
      </div>
      <img src={imageData.url} alt={imageData.name}/>
      <div className={classes.group1}>
        <div className={classes.group2}>
          <div className={classes.name}>{imageData.name}</div>
          <div className={classes.size}>{size}кб</div>
        </div>
      </div>
    </div>
  )
}

export default Item