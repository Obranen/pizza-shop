import React, {FC, useContext} from 'react'
import classes from './Item.module.scss'
import {Context} from '../../../../../../context/Tabs'

interface IItem {
  content: {
    id: number,
    contentItem: any
  }
}

const Item: FC<IItem> = ({content}) => {
  const {currentTabId, myClasses} = useContext(Context)

  if (currentTabId !== content.id) {
    return <></>
  }

  return (
    <div data-id={content.id} className={[classes.contentItem, myClasses?.contentItem].join(' ')}>
      {content.contentItem}
    </div>
  )
}

export default Item