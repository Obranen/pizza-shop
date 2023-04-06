import React, {FC} from 'react'
import {IReviews} from '../../../../../../../../../store/types/review'
import classes from './Item.module.scss'
import {useSelectorHook} from '../../../../../../../../../hooks/useSelectorHook'
import StarRating from './StarRating/StarRating'
import Answer from './Answer/Answer'
import {GrUser} from 'react-icons/gr'
import {MdDateRange} from 'react-icons/md'
import ImagesList from './ImagesList/ImagesList'

interface IItem {
  review: IReviews
}

const Item: FC<IItem> = ({review}) => {
  const {viewId} = useSelectorHook(state => state.view)

  if (viewId !== review.productId) {
    return <></>
  }

  return (
    <div className={classes.review} data-id={review.id}>
      <div className={classes.group1}>
        <div className={classes.name}>
          <span className={classes.icon}><GrUser/></span>
          <span className={classes.text}>{review.name}</span>
        </div>

        <StarRating reviewStar={review.star}/>

        <div className={classes.date}>
          <span className={classes.icon}><MdDateRange/></span>
          <span className={classes.text}>{review.date}</span>
        </div>
      </div>

      <div className={classes.comment}>{review.comment}</div>

      {review.dignity === '' ? <></> :
        <div className={classes.dignity}>
          <span className={classes.title}>Достоинства: </span>
          <span className={classes.text}>{review.dignity}</span>
        </div>
      }

      {review.flaws === '' ? <></> :
        <div className={classes.flaws}>
          <span className={classes.title}>Недостатки: </span>
          <span className={classes.text}>{review.flaws}</span>
        </div>
      }

      <div className={classes.group2}>
        <ImagesList images={review.images}/>
      </div>

        <Answer review={review}/>
    </div>
  )
}

export default Item