import React, {useContext} from 'react'
import classes from './List.module.scss'
import Item from './Item/Item'
import {Context} from '../../../../context/Tabs'

const List = () => {
  const {tabs, locationTabs, myClasses} = useContext(Context)

  return (
    <div className={locationTabs === 'row' ? [classes.tabsGroup, myClasses?.tabsList].join(' ') : [classes.tabsGroup, classes.column, myClasses?.tabsList].join(' ')}>
      {tabs.map((tab) =>
        <Item
          tab={tab}
          key={tab.id}
        />
      )}
    </div>
  )
}

export default List