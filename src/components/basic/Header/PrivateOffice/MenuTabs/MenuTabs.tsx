import UITabs from '../../../../ui/Tabs/Tabs'
import {Tabs as ContextTabs} from '../../../../../context/Tabs'
import React, {useEffect, useState} from 'react'
import Exit from './Exit/Exit'
import classes from './MenuTabs.module.scss'
import OrderLIst from './OrderLIst/OrderLIst'
import MyOrders from './MyOrders/MyOrders'

const MenuTabs = () => {
  const [widthWindow, setWidthWindow] = useState(0)

  const tabs = [
    {
      id: 1,
      title: <MyOrders/>
    },
    {
      id: 2,
      title: <Exit/>
    }
  ]
  const contents = [
    {
      id: 1,
      contentItem: <OrderLIst/>
    },
    {
      id: 2,
      contentItem: ''
    }
  ]

  useEffect(() => {
    const screenWidth = window.screen.width
    setWidthWindow(screenWidth)
  }, [])

  return (
    <ContextTabs
      tabs={tabs}
      contents={contents}
      locationTabs={widthWindow >= 768 ? 'column' : 'row'}
      myClasses={{tabsList: classes.tabsList, tabsItem: classes.tabsItem, main: classes.mainTabs}}
    >
      <UITabs/>
    </ContextTabs>
  )
}

export default MenuTabs