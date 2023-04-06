import React, {createContext, FC, useMemo, useState} from 'react'
import {nanoid} from 'nanoid'

export type AnimationType = 'fade' | 'zoom' | 'rotate'

interface IMyClasses {
  imageList: string
}

export interface ICarousel {
  id: number
  imageSrc: string
  imageAlt: string
  linkUrl: string
}

export interface ICarouselState {
  carousel: ICarousel[]
  animation: AnimationType
  quantityImages: number
}

export interface ICarouselContext {
  carousel: ICarousel[]
  animation: AnimationType
  quantityImages: number
  randomId?: string
  myClasses?: IMyClasses
  currentPage?: number
  setCurrentPage?: (number: number) => void
  children?: React.ReactNode
}

export const Context = createContext({} as ICarouselContext)

export const Carousel: FC<ICarouselContext> =
  ({
     carousel,
     animation,
     quantityImages,
     myClasses,
     children
   }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const randomId = useMemo(() => {
      return nanoid()
    }, [])

    return (
      <Context.Provider value={{randomId, carousel, currentPage, setCurrentPage, animation, quantityImages, myClasses}}>
        {children}
      </Context.Provider>
    )
  }