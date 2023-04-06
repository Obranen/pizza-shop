import React, {FC} from 'react'
import UIStarRating from '../../../../../../../../../ui/StarRating/StarRating'

interface IStarRating {
  reviewStar: number
}

const StarRating: FC<IStarRating> = ({reviewStar}) => {
  return (
    <UIStarRating display={'show'} showQuantityStar={reviewStar}/>
  )
}

export default StarRating