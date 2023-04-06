import React, {useEffect, useState} from 'react'
import {Input as ContextInput} from '../../../context/Input'
import {useSelectorHook} from '../../../hooks/useSelectorHook'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import classes from './ReviewForm.module.scss'
import {useDispatchHook} from '../../../hooks/useDispatchHook'
import {nanoid} from 'nanoid'
import {useDate} from '../../../hooks/useDate'
import UIStarRating from '../../ui/StarRating/StarRating'
import {MdRateReview} from 'react-icons/md'
import {FiSend} from 'react-icons/fi'
import UploadFile, {IImages} from '../../ui/UploadFile/UploadFile'

const ReviewForm = () => {
  const {isAuth} = useSelectorHook((state) => state.auth)
  const {viewId} = useSelectorHook(state => state.view)
  const {isAnswer} = useSelectorHook(state => state.modal)
  const {currentId, reviews} = useSelectorHook(state => state.review)
  const {
    setNotifyActionNotify,
    getReviewsActionReview,
    setReviewsActionReview,
    setIsAnswerActionModal
  } = useDispatchHook()
  const {createDate, createTime} = useDate()
  const [isHideForm, setIsHideForm] = useState(false)
  const [form, setForm] = useState({name: '', email: '', dignity: '', flaws: '', comment: '', star: 1})
  const [formError, setFormError] = useState({name: '', email: '', comment: ''})
  const [arrayImages, setArrayImages] = useState<IImages[]>()
  const [imagesClearArr, setImagesClearArr] = useState(false)
  const [isReset, setIsReset] = useState(false)

  const getArrayImages = (arr: IImages[]) => {
    setArrayImages(arr)
  }

  const createReviewClick = () => {
    const messages = Object.values(formError).filter((error) => error !== '')
    if (form.name !== '' && form.email !== '' && form.comment !== '') {
      if (messages.length === 0) {
        const randomId = nanoid()

        if (isAnswer) {
          reviews.forEach((review) => {
            if (review.id === currentId) {
              setReviewsActionReview({
                ...review,
                answers: [...review.answers,
                  {
                    id: randomId,
                    date: `${createTime()} ${createDate()}`,
                    name: form.name,
                    email: form.email,
                    comment: form.comment,
                    like: {quantity: 0, isLike: false},
                    dislike: {quantity: 0, isDislike: false},
                    noted: [form.email]
                  }]
              })
            }
          })

          setIsAnswerActionModal(false)
          setForm({...form, comment: ''})
        } else {
          getReviewsActionReview({
            id: randomId,
            date: `${createTime()} ${createDate()}`,
            productId: viewId!,
            images: arrayImages!,
            name: form.name,
            email: form.email,
            dignity: form.dignity,
            flaws: form.flaws,
            comment: form.comment,
            star: form.star,
            like: {quantity: 0, isLike: false},
            dislike: {quantity: 0, isDislike: false},
            noted: [form.email],
            answers: []
          })
          setForm({...form, comment: '', dignity: '', flaws: '', star: 1})
          setImagesClearArr(true)
          setIsReset(true)
        }

        setNotifyActionNotify({message: 'Отзыв добавлен!', isNotify: true, styleState: 'success'})
      } else {
        setNotifyActionNotify({message: messages[0], isNotify: true})
      }
    } else {
      setNotifyActionNotify({message: 'Заполните обязательные поля!', isNotify: true})
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isAnswer) {
      setIsHideForm(true)
    } else {
      timer = setTimeout(() => {
        setIsHideForm(false)
      }, 700)
    }
    return () => clearTimeout(timer)
  }, [isAnswer])

  useEffect(() => {
    if (isAuth) {
      if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user')!)
        setForm({...form, email: user.email, name: user.name})
      }
    }
  }, [isAuth])  // eslint-disable-line

  return (
    <div className={classes.form}>
      <h3 className={classes.title}>
        <span className={classes.icon}><MdRateReview/></span>
        <span className={classes.text}>оставить отзыв</span>
      </h3>

      <div className={classes.content}>
        <div className={classes.name}>
          <ContextInput
            type={'text'}
            placeholder={'Имя'}
            label={{show: true, rise: true}}
            validation={{include: true, length: {include: true, min: '3'}}}
            value={form.name}
            onChange={isAuth ? () => {
            } : (e) => setForm({...form, name: e.currentTarget.value})}
            getErrorMessage={(errorMessage) => setFormError({...formError, name: errorMessage})}
          >
            <Input/>
          </ContextInput>
        </div>

        <div className={classes.email}>
          <ContextInput
            type={'text'}
            placeholder={'email'}
            label={{show: true, rise: true}}
            validation={{include: true, email: {include: true}}}
            value={form.email}
            onChange={isAuth ? () => {
            } : (e) => setForm({...form, email: e.currentTarget.value})}
            getErrorMessage={(errorMessage) => setFormError({...formError, email: errorMessage})}
          >
            <Input/>
          </ContextInput>
        </div>

        {isHideForm ? <></> :
          <>
            <div className={classes.dignity}>
              <ContextInput
                type={'textarea'}
                placeholder={'Достоинства'}
                label={{show: true, rise: true}}
                value={form.dignity}
                onChange={(e) => setForm({...form, dignity: e.currentTarget.value})}
              >
                <Input/>
              </ContextInput>
            </div>
            <div className={classes.flaws}>
              <ContextInput
                type={'textarea'}
                placeholder={'Недостатки'}
                label={{show: true, rise: true}}
                value={form.flaws}
                onChange={(e) => setForm({...form, flaws: e.currentTarget.value})}
              >
                <Input/>
              </ContextInput>
            </div>
          </>
        }

        <div className={classes.comment}>
          <ContextInput
            type={'textarea'}
            placeholder={'Комментарий'}
            label={{show: true, rise: true}}
            validation={{include: true, length: {include: true, min: '3', max: '500'}}}
            value={form.comment}
            onChange={(e) => setForm({...form, comment: e.currentTarget.value})}
            getErrorMessage={(errorMessage) => setFormError({...formError, comment: errorMessage})}
          >
            <Input/>
          </ContextInput>
        </div>

        {isHideForm ? <></> :
          <>
            <div className={classes.wrapperStars}>
              <UIStarRating mainClass={classes.stars} getQuantityStar={(quantity) => setForm({...form, star: quantity})} setStateReset={isReset} getStateReset={(getStateReset) => setIsReset(getStateReset)}/>
            </div>

            <UploadFile arrayImages={getArrayImages} setClearArray={imagesClearArr} getClearArray={(getClearArray) => setImagesClearArr(getClearArray)}/>
          </>
        }

        <Button onClick={createReviewClick} className={classes.createReview}>
          <span className={classes.icon}><FiSend/></span>
          <span className={classes.text}>опубликовать</span>
        </Button>

      </div>
    </div>
  )
}

export default ReviewForm