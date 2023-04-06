import React, {FC} from 'react'
import {IImages} from '../../../../../../../../../../store/types/review'
import Item from './Item/Item'
import classes from './ImagesList.module.scss'

interface IImagesList {
  images: IImages[]
}

const ImagesList: FC<IImagesList> = ({images}) => {
  return (
    <div className={classes.imageView}>
      {images.map((image, index) =>
        <Item
          key={image.id}
          image={image}
          index={index}
        />
      )}
    </div>
  )
}

export default ImagesList