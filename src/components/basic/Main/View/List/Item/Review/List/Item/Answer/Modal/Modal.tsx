import React, {FC} from 'react'
import UIModal from '../../../../../../../../../../ui/Modal/Modal'
import Link from './Link/Link'
import Content from './Content/Content'
import {IReviews} from '../../../../../../../../../../../store/types/review'
import {useSelectorHook} from '../../../../../../../../../../../hooks/useSelectorHook'
import {useDispatchHook} from '../../../../../../../../../../../hooks/useDispatchHook'
import classes from './Modal.module.scss'
import LikeRating from './LikeRating/LikeRating'

interface IModal {
  review: IReviews
}

const Modal: FC<IModal> = ({review}) => {
  const {isAnswer} = useSelectorHook(state => state.modal)
  const {setIsAnswerActionModal} = useDispatchHook()

  const answerClick = () => {
    setIsAnswerActionModal(true)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.likeRating}>
        <LikeRating review={review}/>
      </div>
      <div onClick={answerClick} className={classes.answer}>
        <UIModal
          closeOutOfContent={false}
          nameLink={<Link/>}
          showClose={false}
          isActiveModal={isAnswer}
          myClass={{content: classes.content}}
        >
          <Content review={review}/>
        </UIModal>
      </div>
    </div>
  )
}

export default Modal