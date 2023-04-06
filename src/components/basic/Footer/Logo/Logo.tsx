import React from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Logo.module.scss'

const Logo = () => {
  return (
    <Col xs={12} sm={4}>
      <div className={classes.logo}>pizza</div>
    </Col>
  )
}

export default Logo