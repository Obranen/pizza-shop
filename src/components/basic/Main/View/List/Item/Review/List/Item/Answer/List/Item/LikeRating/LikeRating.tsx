import React, {FC, memo, useEffect, useRef} from 'react'
import classes from './LikeRating.module.scss'
import {SlDislike, SlLike} from 'react-icons/sl'
import {IAnswers, IReviews} from '../../../../../../../../../../../../../store/types/review'
import {useDispatchHook} from '../../../../../../../../../../../../../hooks/useDispatchHook'
import {useSelectorHook} from '../../../../../../../../../../../../../hooks/useSelectorHook'

interface ILikeRating {
  review: IReviews
  answer: IAnswers
}

const LikeRating: FC<ILikeRating> = memo(({review, answer}) => {
  const likeIconRef = useRef<HTMLSpanElement>(null)
  const dislikeIconRef = useRef<HTMLSpanElement>(null)
  const {reviews} = useSelectorHook(state => state.review)
  const {setReviewsActionReview, setNotifyActionNotify} = useDispatchHook()

  const likeClick = (e: React.MouseEvent<SVGSVGElement>) => {
    updateAnswer(e, true, false)
  }
  const dislikeClick = (e: React.MouseEvent<SVGSVGElement>) => {
    updateAnswer(e, false, true)
  }

  const updateAnswer = (e: React.MouseEvent<SVGSVGElement>, isLike: boolean, isDislike: boolean) => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!)
      const $target = e.currentTarget
      const isUserEmail = answer.noted.includes(user.email)
      let likeQuantity: number = answer.like.quantity
      let dislikeQuantity: number = answer.dislike.quantity

      if (isLike) {
        likeQuantity = answer.like.quantity + 1
      }
      if (isDislike) {
        dislikeQuantity = answer.dislike.quantity + 1
      }

      if (answer.email === user.email) {
        setNotifyActionNotify({message: 'Вы не можете голосовать за свой же отзыв', isNotify: true})
      } else {
        const removedEmail = answer.noted.filter((noted) => noted !== user.email)
        reviews.forEach((item) => {
          if (item.id === review.id) {
            if (!(isUserEmail)) {
              setReviewsActionReview({
                ...item,
                answers: item.answers.map((elem) => String(elem.id) === String(answer!.id) ? {
                  ...elem,
                  like: {quantity: likeQuantity, isLike: isLike},
                  dislike: {quantity: dislikeQuantity, isDislike: isDislike},
                  noted: [...elem.noted, user.email]
                } : elem)
              })
              $target.classList.add(classes.active)
            } else {
              if (answer.like.isLike) {
                setReviewsActionReview({
                  ...item,
                  answers: item.answers.map((elem) => String(elem.id) === String(answer!.id) ? {
                    ...elem,
                    noted: [...removedEmail],
                    like: {quantity: answer.like.quantity - 1, isLike: false}
                  } : elem)
                })
                likeIconRef.current!.querySelector(`svg`)!.classList.remove(classes.active)
              }
              if (answer.dislike.isDislike) {
                setReviewsActionReview({
                  ...item,
                  answers: item.answers.map((elem) => String(elem.id) === String(answer!.id) ? {
                    ...elem,
                    noted: [...removedEmail],
                    dislike: {quantity: answer.dislike.quantity - 1, isDislike: false}
                  } : elem)
                })
                dislikeIconRef.current!.querySelector(`svg`)!.classList.remove(classes.active)
              }
            }
          }
        })
      }
    }
  }

  const addClassAfterReboot = () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!)
      const isUserEmail = answer.noted.includes(user.email)
      if (isUserEmail) {
        if (answer.like.isLike) {
          likeIconRef.current!.querySelector(`.${classes.icon}`)!.classList.add(classes.active)
        }
        if (answer.dislike.isDislike) {
          dislikeIconRef.current!.querySelector(`.${classes.icon}`)!.classList.add(classes.active)
        }
      }
    }
  }

  useEffect(() => {
    addClassAfterReboot()
  }, []) // eslint-disable-line

  return (
    <div className={classes.wrapperLike}>
      <span ref={likeIconRef} className={classes.like}>
        <SlLike className={classes.icon} onClick={likeClick}/>
        <span className={classes.text}>
          {answer.like.quantity}
        </span>
      </span>

      <span ref={dislikeIconRef} className={classes.dislike}>
        <SlDislike className={classes.icon} onClick={dislikeClick}/>
        <span className={classes.text}>
          {answer.dislike.quantity}
        </span>
      </span>
    </div>
  )
})

export default LikeRating