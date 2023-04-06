import React, {useEffect, useState} from 'react'
import {useSelectorHook} from '../../../../../../../../hooks/useSelectorHook'
import Item from './Item/Item'
import {Col} from 'react-flexbox-grid'
import classes from './List.module.scss'
import NoReviewMessage from './NoReviewMessage/NoReviewMessage'
import {VscPreview} from 'react-icons/vsc'

const List = () => {
  const {reviews} = useSelectorHook(state => state.review)
  const {viewId} = useSelectorHook(state => state.view)
  const [reviewMessage, setReviewMessage] = useState(false)

  const reviewsReverse = [...reviews].reverse()

  const noReview = () => {
    const filterReview = reviews.filter((review) => viewId === review.productId)
    if (filterReview.length === 0) {
      setReviewMessage(true)
    } else {
      setReviewMessage(false)
    }
  }

  useEffect(() => {
    noReview()
  }, [reviews]) // eslint-disable-line

  return (
    <Col xs={12} sm={12} mdOffset={1} md={10} xlOffset={0} xl={9}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>
          <span className={classes.icon}><VscPreview/></span>
          <span className={classes.text}>отзывы</span>
        </h3>
        { !(reviewMessage) ? reviewsReverse.map((review) =>
          <Item
            key={review.id}
            review={review}
          />
        ) : <NoReviewMessage/>}
      </div>
    </Col>
  )
}

export default List