import noReview from '../../../../../../../../../utils/images/review/noReview.jpg'
import classes from './NoReviewMessage.module.scss'

const NoReviewMessage = () => {
  return (
    <div className={classes.noReview}>
      <div className={classes.wrapperImg}>
        <img className={classes.img} src={noReview} alt="noReview"/>
      </div>
      <div className={classes.text}>У этого товара пока нет отзывов. Станьте первым!</div>
    </div>
  )
}

export default NoReviewMessage