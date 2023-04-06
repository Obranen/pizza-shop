import React, {useContext} from 'react'
import List from './List/List'
import Content from './Content/Content'
import {Context} from '../../../context/Tabs'
import classes from './Tabs.module.scss'
import {Col} from 'react-flexbox-grid'

const Tabs = () => {
  const {locationTabs, myClasses} = useContext(Context)
  return (
    <Col sm={12} className={locationTabs === 'row' ? myClasses?.main : [classes.column, myClasses?.main].join(' ')}>
      <List/>
      <Content/>
    </Col>
  )
}

export default Tabs