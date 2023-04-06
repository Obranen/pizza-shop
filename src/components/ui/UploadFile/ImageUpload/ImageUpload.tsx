import React, {FC} from 'react'
import classes from './ImageUpload.module.scss'
import {IImages} from '../UploadFile'
import Item from './Item/Item'

interface IImageUpload {
  images: IImages[]
  setImages?: (arr: IImages[]) => void
}

const ImageUpload: FC<IImageUpload> = ({images, setImages}) => {
  return (
    <div className={classes.imageUpload}>
      {images && images.map((imageData, index) =>
        <Item
          key={imageData.id}
          imageData={imageData}
          index={index}
          arrImages={images}
          setImages={setImages!}
        />
      )}
    </div>
  )
}

export default ImageUpload