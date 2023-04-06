import classesImageItem from '../components/ui/Carousel/Images/List/Item/Item.module.scss'
import {useContext} from 'react'
import {Context} from '../context/Carousel'

export const useCarousel = () => {
  const {animation, quantityImages, carousel, currentPage, randomId} = useContext(Context)

  const getCurrentImages = () => {
    const lastImage = currentPage! * quantityImages
    const firstImage = lastImage - quantityImages
    return carousel.slice(firstImage, lastImage)
  }

  const createArrayPages = () => {
    const arrayPages: number[] = []

    const totalPages = () => {
      for (let i = 1; i <= Math.ceil(carousel.length / quantityImages); i++) {
        arrayPages.push(i)
      }
    }
    totalPages()
    return arrayPages
  }

  const selectedAnimation = () => {
    if (animation === 'fade') {
      return [classesImageItem.fadeIn, classesImageItem.fadeOut]
    } else if (animation === 'zoom') {
      return [classesImageItem.zoomIn, classesImageItem.zoomOut]
    } else if (animation === 'rotate') {
      return [classesImageItem.rotateIn, classesImageItem.rotateOut]
    }
  }

  const addedAnimationOut = () => {
    const $currentImage = document.getElementById(randomId!)!.querySelector(`.${selectedAnimation()![0]}`)
    $currentImage!.classList.add(selectedAnimation()![1])
  }

  const removeAnimationOut = () => {
    const $currentImage = document.getElementById(randomId!)!.querySelector(`.${selectedAnimation()![0]}`)
    $currentImage!.classList.remove(selectedAnimation()![1])
  }

  return {addedAnimationOut, selectedAnimation, createArrayPages, getCurrentImages, removeAnimationOut}
}