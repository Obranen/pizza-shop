import React, {useContext} from 'react'
import classes from './List.module.scss'
import Item from './Item/Item'
import {Context} from '../../../../../context/Tabs'

const List = () => {
  const {contents, myClasses} = useContext(Context)

  return (
    <div className={[classes.content, myClasses?.contentList].join(' ')}>
      {contents.map((content) =>
        <Item
          content={content}
          key={content.id}
        />
      )}
    </div>
  )
}

export default List