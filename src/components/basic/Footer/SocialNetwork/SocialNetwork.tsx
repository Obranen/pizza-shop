import React from 'react'
import {FaFacebook, FaTelegram, FaViber} from 'react-icons/fa'
import {Col} from 'react-flexbox-grid'
import classes from './SocialNetwork.module.scss'
import Tooltip from '../../../ui/Tooltip/Tooltip'

const SocialNetwork = () => {
  return (
    <Col xs={12} sm={4}>
      <div className={classes.socialNetwork}>
        <div className={classes.iconGroup}>
          <Tooltip position={'top'} content={'Facebook'}>
            <span className={classes.facebook}>
              <FaFacebook/>
            </span>
          </Tooltip>
          <Tooltip position={'top'} content={'Telegram'}>
            <span className={classes.telegram}><FaTelegram/></span>
          </Tooltip>
          <Tooltip position={'top'} content={'Viber'}>
            <span className={classes.viber}>
              <FaViber/>
            </span>
          </Tooltip>
        </div>
      </div>
    </Col>
  )
}

export default SocialNetwork