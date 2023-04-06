import React from 'react'
import {typesRoutes} from '../../../../pages/typesRoutes'
import {Link} from 'react-router-dom'
import {FaHouseUser} from 'react-icons/fa'
import classes from './LinkPrivateOffice.module.scss'

const LinkPrivateOffice = () => {
  return (
    <Link to={typesRoutes.PRIVATE_OFFICE}>
      <FaHouseUser className={classes.icon}/>
    </Link>
  )
}

export default LinkPrivateOffice