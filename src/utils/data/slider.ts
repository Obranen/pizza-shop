import sale1 from '../images/slide/sale1.jpg'
import sale2 from '../images/slide/sale2.jpg'
import {ICarouselState} from '../../context/Carousel'

export const slider: ICarouselState = {
  carousel: [
    {
      id: 1,
      imageSrc: sale1,
      imageAlt: 'sale1',
      linkUrl: '/pizza'
    },
    {
      id: 2,
      imageSrc: sale2,
      imageAlt: 'sale2',
      linkUrl: '/pizza'
    }
  ],
  animation: 'fade',
  quantityImages: 1
}