import React, {FC} from 'react'
import {Link, LinkProps, useMatch, useResolvedPath} from 'react-router-dom'
import classes from './LinkActiive.module.scss'

const LinkActive: FC<LinkProps> = ({children, to, ...props}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({path: resolved.pathname, end: true});

  return (
    <div>
      <Link
        className={match ? classes.active : ''}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  )
}

export default LinkActive