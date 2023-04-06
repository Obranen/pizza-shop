import React, { FC } from 'react'
import classes from './Item.module.scss'
import { useDispatchHook } from '../../../../../../hooks/useDispatchHook'
import LinkActive from '../../../../../ui/LinkActive/LinkActive'

interface IItem {
  navValue: string
  navKey: string
}

const Item: FC<IItem> = ({ navValue, navKey }) => {
  const { setIsClickLinkMenuActionMenu } = useDispatchHook()

  const itemClick = () => {
    setIsClickLinkMenuActionMenu(true)
  }

  return (
    <span className={classes.navBarItem}>
      <LinkActive onClick={itemClick} to={navValue}>
        {navKey}
      </LinkActive>
    </span>
  )
}

export default Item
