import React, {FC} from 'react'
import {IReviews} from '../../../../../../../../../../store/types/review'
import Modal from './Modal/Modal'
import List from './List/List'

interface IAnswer {
  review: IReviews
}

const Answer: FC<IAnswer> = ({review}) => {
  return (
    <>
      <Modal review={review}/>
      <List review={review}/>
    </>
  )
}

export default Answer