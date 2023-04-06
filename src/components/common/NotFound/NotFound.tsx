import React from 'react'
import classes from './NotFound.module.scss'
import {BiErrorAlt} from 'react-icons/bi'

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <BiErrorAlt className={classes.icon}/>
      <div className={classes.text}>Страница не найдена!</div>
    </div>
  )
}

export default NotFound