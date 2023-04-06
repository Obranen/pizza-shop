import React from 'react'
import List from './List/List'
import classes from './Pages.module.scss'

const Pages = () => {
  return (
    <div className={classes.pagesWrapper}>
      <List/>
    </div>
  )
}

export default Pages