import classes from './Link.module.scss'
import React from 'react'
import {useDispatchHook} from '../../../../../../../../../../../../hooks/useDispatchHook'
import {setCurrentIdActionReview} from '../../../../../../../../../../../../store/actions/review'
import {MdOutlineQuestionAnswer} from 'react-icons/md'

const Link = () => {
  const {setCurrentIdActionReview} = useDispatchHook()

  const answerClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const $target = e.currentTarget
    const idReview = $target.parentElement!.parentElement!.parentElement!.parentElement!.getAttribute('data-id')
    setCurrentIdActionReview(idReview!)
  }

  return (
    <div className={classes.link} onClick={answerClick}>
      <span className={classes.icon}><MdOutlineQuestionAnswer/></span>
      <span className={classes.text}>Ответить</span>
    </div>
  )
}

export default Link