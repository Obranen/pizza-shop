import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {ICarousel} from '../../../../../../context/Carousel'

interface IItem {
  image: ICarousel
  index: number
}

const Item: FC<IItem> = ({image}) => {
  return (
    <Link to={image.linkUrl}>
      <img src={image.imageSrc} alt={image.imageAlt}/>
    </Link>
  )
}

export default Item