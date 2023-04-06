import React, {FC} from 'react'
import {IAnswers, IReviews} from '../../../../../../../../../../../../store/types/review'
import classes from './Item.module.scss'
import LikeRating from './LikeRating/LikeRating'
import {Col} from 'react-flexbox-grid'
import {GrUser} from 'react-icons/gr'
import {MdDateRange} from 'react-icons/md'

interface IItem {
  answer: IAnswers
  review: IReviews
}

const Item: FC<IItem> = ({answer, review}) => {

  return (
    <Col xs={12} sm={12} md={8} mdOffset={4} className={classes.wrapper}>
      <div className={classes.answer}>
        <div className={classes.name}>
          <span className={classes.icon}><GrUser/></span>
          <span className={classes.text}>{answer.name}</span>
        </div>
        <div className={classes.likeRating}>
          <LikeRating answer={answer} review={review}/>
        </div>
        <div className={classes.date}>
          <span className={classes.icon}><MdDateRange/></span>
          <span className={classes.text}>{answer.date}</span>
        </div>
      </div>
      <div className={classes.comment}>
        {answer.comment}
      </div>
    </Col>
  )
}

export default Item