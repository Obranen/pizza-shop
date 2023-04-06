import React, {useContext} from 'react'
import Item from './Item/Item'
import {useCarousel} from '../../../../../hooks/useCarousel'
import classes from './List.module.scss'
import {Context} from '../../../../../context/Carousel'

const List = () => {
  const {getCurrentImages, selectedAnimation} = useCarousel()
  const {myClasses} = useContext(Context)
  const currentImages = getCurrentImages()

  return (
    <div className={classes.wrapperList}>
      <div className={[classes.list, selectedAnimation()![0], myClasses?.imageList].join(' ')}>
        {currentImages.map((image, index) =>
          <Item
            key={image.id}
            image={image}
            index={index}
          />
        )}
      </div>
    </div>
  )
}

export default List