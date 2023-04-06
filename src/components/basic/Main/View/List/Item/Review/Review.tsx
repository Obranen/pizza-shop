import React from 'react'
import List from './List/List'
import Form from '../../../../../../common/ReviewForm/ReviewForm'
import {Col, Row} from 'react-flexbox-grid'

const Review = () => {
  return (
    <Row>
      <List/>
      <Col xs={12} sm={12} mdOffset={1} md={10} xlOffset={0} xl={3}>
        <Form/>
      </Col>
    </Row>
  )
}

export default Review