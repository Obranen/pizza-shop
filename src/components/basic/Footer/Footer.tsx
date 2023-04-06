import React from 'react'
import classes from './Footer.module.scss'
import {Grid, Row} from 'react-flexbox-grid'
import Logo from './Logo/Logo'
import Subscription from './Subscription/Subscription'
import SocialNetwork from './SocialNetwork/SocialNetwork'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Grid fluid>
        <Row>
          <Logo/>
          <Subscription/>
          <SocialNetwork/>
        </Row>
      </Grid>
    </div>
  )
}

export default Footer