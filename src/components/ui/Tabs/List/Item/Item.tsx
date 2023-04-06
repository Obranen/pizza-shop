import React, {FC, useContext, useEffect, useRef} from 'react'
import classes from './Item.module.scss'
import {Context} from '../../../../../context/Tabs'

interface IItem {
  tab: {
    id: number,
    title: React.ReactNode
  }
}

const Item: FC<IItem> = ({tab}) => {
  const {setCurrentTabId, locationTabs, myClasses} = useContext(Context)
  const tabRef = useRef<HTMLDivElement>(null)

  const tabClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const $target = event.currentTarget

    if (setCurrentTabId) {
      setCurrentTabId(Number($target.getAttribute('data-id')))
    }

    $target.parentElement!.querySelector(`.${classes.active}`)!.classList.remove(classes.active)
    $target.classList.add(classes.active)
  }

  useEffect(() => {
    const attr = tabRef.current?.getAttribute('data-id')
    if (attr === '1') {
      tabRef.current?.classList.add(classes.active)
    }
  }, [])

  return (
    <div ref={tabRef} onClick={tabClick} data-id={tab.id} className={classes.item} key={tab.id}>
      <div className={locationTabs === 'row' ? [classes.titleRow, myClasses?.tabsItem].join(' ') : [classes.titleColumn, myClasses?.tabsItem].join(' ')}>
        {tab.title}
      </div>
    </div>
  )
}

export default Item