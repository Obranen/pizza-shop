import React, {FC} from 'react'
import classes from './Button.module.scss'

interface IButton {
  children?: React.ReactNode
  onClick?: (event: any) => void
  className?: string
  innerRef?: any
}

const Button: FC<IButton> = ({innerRef, children, ...props}) => {

  return (
    <button ref={innerRef} {...props} className={[props.className, classes.button].join(' ')}>{children}</button>
  )
}

export default Button