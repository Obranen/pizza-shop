import React, {FC} from 'react'
import {IReviews} from '../../../../../../../../../../../store/types/review'
import Item from './Item/Item'

interface IList {
  review: IReviews
}

const List: FC<IList> = ({review}) => {

  if (review.answers.length === 0) {
    return <></>
  }

  return (
    <>
      {review.answers.map((answer) =>
        <Item
          key={answer.id}
          answer={answer}
          review={review}
        />
      )}
    </>
  )
}

export default List