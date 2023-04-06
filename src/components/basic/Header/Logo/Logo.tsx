import React from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Logo.module.scss'
import {typesRoutes} from '../../../../pages/typesRoutes'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Col xs={12} sm={4}>
      <div className={classes.logo}>
        <Link className={classes.link} to={typesRoutes.HOME}>
          <div className={classes.word}>
            <div className={classes.stripTop}></div>
            <span className={classes.letterP}>P</span>
            <span className={classes.letterI}>I</span>
            <span className={classes.letterZ1}>Z</span>
            <span className={classes.letterZ2}>Z</span>
            <span className={classes.letterA}>A</span>
            <div className={classes.stripBottom}></div>
          </div>
        </Link>
      </div>
    </Col>
  )
}

export default Logo