import React, {FC, useEffect, useState} from 'react'
import classes from './Stars.module.scss'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export type DisplayType = 'show' | 'change'

export interface IStarRating {
  stars?: number[]
  display?: DisplayType
  showQuantityStar?: number
  getQuantityStar?: (quantity: number) => void
  getStateReset?: (getStateReset: boolean) => void
  mainClass?: string
  setStateReset?: boolean
}

const StarRating: FC<IStarRating> =
  ({
     stars = [5, 4, 3, 2, 1],
     display = 'change',
     showQuantityStar = 1,
     getQuantityStar,
     mainClass,
     setStateReset,
     getStateReset
   }) => {
    const [currentStar, setCurrentStar] = useState<number>(showQuantityStar)

    const starClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (display === 'change') {
        const $target = e.currentTarget
        const currentStar = $target.getAttribute(`data-id`)
        setCurrentStar(Number(currentStar))
        getQuantityStar!(Number(currentStar))
      }
    }

    useEffect(() => {
      if (setStateReset) {
        setCurrentStar(1)
        getStateReset!(false)
      }
    }, [setStateReset]) // eslint-disable-line

    return (
      <div className={[classes.stars, mainClass].join(' ')}>
        {stars.map((starId) =>
          currentStar < starId ?
            <div key={starId}
                 onClick={starClick}
                 data-id={starId}
                 className={display === 'change' ? classes.starChange : classes.starShow}>
              <AiOutlineStar/>
            </div> :
            <div
              key={starId}
              onClick={starClick}
              data-id={starId}
              className={display === 'change' ?
                [classes.starChange, classes.active].join(' ') :
                [classes.starShow, classes.active].join(' ')}>
              <AiFillStar/>
            </div>
        )}
      </div>
    )
  }

export default StarRating