import React, {FC} from 'react'
import classes from './Content.module.scss'
import {IReviews} from '../../../../../../../../../../../../store/types/review'
import Form from '../../../../../../../../../../../common/ReviewForm/ReviewForm'
import {Col} from 'react-flexbox-grid'
import Close from './Close/Close'

interface IContent {
  review: IReviews
}

const Content: FC<IContent> = ({review}) => {

  return (
    <div className={classes.content}>
      <Close/>
      <Col xs={12} sm={12}>
        <Form/>
      </Col>
    </div>
  )
}

export default Content