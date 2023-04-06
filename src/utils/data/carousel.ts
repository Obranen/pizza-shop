import dablChizburger from '../images/carousel/dabl-chizburger.jpeg'
import gamburger from '../images/carousel/gamburger.jpeg'
import gurmeo from '../images/carousel/gurmeo_1567060279780.jpeg'
import hugarden from '../images/carousel/hugarden.jpeg'
import loveUa from '../images/carousel/love-ua.jpeg'
import marengo from '../images/carousel/marengo.jpeg'
import milano from '../images/carousel/milano_1654329100503.jpeg'
import sandoraAnanas from '../images/carousel/sandora-ananas.jpeg'
import {ICarouselState} from '../../context/Carousel'

export const carousel: ICarouselState = {
  carousel: [
    {
      id: 1,
      imageSrc: dablChizburger,
      imageAlt: 'фотка1',
      linkUrl: '/burgers'
    },
    {
      id: 2,
      imageSrc: gamburger,
      imageAlt: 'фотка2',
      linkUrl: '/burgers'
    },
    {
      id: 3,
      imageSrc: gurmeo,
      imageAlt: 'фотка3',
      linkUrl: '/pizza'
    },
    {
      id: 4,
      imageSrc: hugarden,
      imageAlt: 'фотка4',
      linkUrl: '/drinks'
    },
    {
      id: 5,
      imageSrc: loveUa,
      imageAlt: 'фотка1',
      linkUrl: '/sets'
    },
    {
      id: 6,
      imageSrc: marengo,
      imageAlt: 'фотка2',
      linkUrl: '/drinks'
    },
    {
      id: 7,
      imageSrc: milano,
      imageAlt: 'фотка3',
      linkUrl: '/pizza'
    },
    {
      id: 8,
      imageSrc: sandoraAnanas,
      imageAlt: 'фотка4',
      linkUrl: '/drinks'
    }
  ],
  animation: 'fade',
  quantityImages: 4
}