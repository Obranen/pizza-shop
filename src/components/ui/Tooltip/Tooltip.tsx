import React, {FC, useState} from 'react'
import classes from './Tooltip.module.scss'

type PositionType = 'top' | 'bottom' | 'left' | 'right'

interface ITooltip {
  content: string
  children: React.ReactNode
  position: PositionType
}

const Tooltip: FC<ITooltip> = ({children, content, position}) => {
  const [isTooltip, setIsTooltip] = useState(false)

  const childrenMouseEnter = () => {
    setIsTooltip(true)
  }

  const childrenMouseLeave = () => {
    setIsTooltip(false)
  }

  return (
    <div className={classes.tooltip}>
      {isTooltip ?
        <div
          className={[classes.content, classes[position]].join(' ')}
        >
          {content}</div>
        : <></>}
      <span
        onMouseEnter={childrenMouseEnter}
        onMouseLeave={childrenMouseLeave}
      >
        {children}
      </span>
    </div>
  )
}

export default Tooltip