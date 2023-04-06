import React, {FC, useEffect, useRef, useState} from 'react'
import classes from './UploadFile.module.scss'
import ImageUpload from './ImageUpload/ImageUpload'
import {nanoid} from 'nanoid'

export interface IImages {
  id: string
  url: string
  name: string
  size: number
}

interface IUploadFile {
  arrayImages: (arr: IImages[]) => void
  setClearArray?: boolean
  getClearArray?: (getClearArray: boolean) => void
}

const UploadFile: FC<IUploadFile> = ({arrayImages, setClearArray, getClearArray}) => {
  const buttonRef = useRef<HTMLInputElement>(null)
  const [images, setImages] = useState<IImages[]>([])
  const [isShowImages, setIsShowImages] = useState(false)

  const uploadFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files.length !== 0) {
      const arrFiles = Array.from(files)

      const imagesArray = arrFiles.map((file) => {
        const randomId = nanoid()
        return {
          id: randomId,
          url: URL.createObjectURL(file),
          name: file.name,
          size: file.size
        }
      })

      setImages(prevState => prevState.concat(imagesArray))
    }
  }

  const addClick = () => {
    buttonRef.current!.click()
  }

  useEffect(() => {
    if (setClearArray) {
      setImages([])
      getClearArray!(false)
    }
  }, [setClearArray]) // eslint-disable-line

  useEffect(() => {
    arrayImages(images)
  }, [images]) // eslint-disable-line

  return (
    <div className={classes.uploadFile}>
      <div className={classes.wrapperAddImage}>
        <div onClick={addClick} className={classes.addImage}>
          <div className={classes.plus}>+</div>
          <div className={classes.text}>Добавить картинку</div>
        </div>
      </div>

      {images.length ?
      <div onClick={() => setIsShowImages(prev => !prev)} className={classes.showImages}>
        {isShowImages ? 'Показать изображения' : 'Спрятать изображения'}
      </div> : <></>}

      {isShowImages || <ImageUpload images={images} setImages={setImages}/>}

      {images.length ? <div className={classes.allDelete} onClick={() => setImages([])}>Удалить все изображения</div> : <></>}

      <input
        type="file"
        multiple
        accept=".jpg, .jpeg, .png, .web"
        onChange={uploadFileChange}
        ref={buttonRef}
        hidden
      />
    </div>
  )
}

export default UploadFile