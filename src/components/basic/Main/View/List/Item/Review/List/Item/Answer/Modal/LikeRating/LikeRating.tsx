import React, {FC, memo, useEffect, useRef} from 'react'
import classes from './LikeRating.module.scss'
import {SlDislike, SlLike} from 'react-icons/sl'
import {IReviews} from '../../../../../../../../../../../../store/types/review'
import {useDispatchHook} from '../../../../../../../../../../../../hooks/useDispatchHook'

interface ILikeRating {
  review: IReviews
}

const LikeRating: FC<ILikeRating> = memo(({review}) => {
  const likeIconRef = useRef<HTMLSpanElement>(null)
  const dislikeIconRef = useRef<HTMLSpanElement>(null)
  const {setReviewsActionReview, setNotifyActionNotify} = useDispatchHook()

  const likeClick = (e: React.MouseEvent<SVGSVGElement>) => {
    updateReview(e, true, false)
  }
  const dislikeClick = (e: React.MouseEvent<SVGSVGElement>) => {
    updateReview(e, false, true)
  }

  const updateReview = (e: React.MouseEvent<SVGSVGElement>, isLike: boolean, isDislike: boolean) => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!)
      const $target = e.currentTarget
      const isUserEmail = review.noted.includes(user.email)
      let likeQuantity: number = review.like.quantity
      let dislikeQuantity: number = review.dislike.quantity

      if (isLike) {
        likeQuantity = review.like.quantity + 1
      }
      if (isDislike) {
        dislikeQuantity = review.dislike.quantity + 1
      }

      if (review.email === user.email) {
        setNotifyActionNotify({message: 'Вы не можете голосовать за свой же отзыв', isNotify: true})
      } else {
        if (!(isUserEmail)) {
          setReviewsActionReview({
            ...review,
            id: review.id,
            noted: [...review.noted, user.email],
            like: {quantity: likeQuantity, isLike: isLike},
            dislike: {quantity: dislikeQuantity, isDislike: isDislike}
          })

          $target.classList.add(classes.active)
        } else {
          if (review.like.isLike) {
            const removedEmail = review.noted.filter((noted) => noted !== user.email)
            setReviewsActionReview({
              ...review,
              id: review.id,
              noted: [...removedEmail],
              like: {quantity: review.like.quantity - 1, isLike: false}
            })
            likeIconRef.current!.querySelector(`svg`)!.classList.remove(classes.active)
          }

          if (review.dislike.isDislike) {
            const removedEmail = review.noted.filter((noted) => noted !== user.email)
            setReviewsActionReview({
              ...review,
              id: review.id,
              noted: [...removedEmail],
              dislike: {quantity: review.dislike.quantity - 1, isDislike: false}
            })
            dislikeIconRef.current!.querySelector(`svg`)!.classList.remove(classes.active)
          }
        }
      }
    }
  }

  const addClassAfterReboot = () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!)
      const isUserEmail = review.noted.includes(user.email)
      if (isUserEmail) {
        if (review.like.isLike) {
          likeIconRef.current!.querySelector(`.${classes.icon}`)!.classList.add(classes.active)
        }
        if (review.dislike.isDislike) {
          dislikeIconRef.current!.querySelector(`.${classes.icon}`)!.classList.add(classes.active)
        }
      }
    }
  }

  useEffect(() => {
    addClassAfterReboot()
  }, []) // eslint-disable-line

  return (
    <div className={classes.wrapper}>
      <span ref={likeIconRef} className={classes.like}>
        <SlLike className={classes.icon} onClick={likeClick}/>
        <span className={classes.text}>
          {review.like.quantity}
        </span>
      </span>

      <span ref={dislikeIconRef} className={classes.dislike}>
        <SlDislike className={classes.icon} onClick={dislikeClick}/>
        <span className={classes.text}>
          {review.dislike.quantity}
        </span>
      </span>
    </div>
  )
})

export default LikeRating