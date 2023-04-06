import React from 'react'
import classes from './Navigation.module.scss'
import List from './List/List'
import {Col} from 'react-flexbox-grid'

const Navigation = () => {
  return (
    <Col xs={12} sm={12} mdOffset={2} md={8} lgOffset={3} lg={6} xlOffset={4} xl={4} className={classes.navBar}>
      <List/>
    </Col>
  )
}

export default Navigation