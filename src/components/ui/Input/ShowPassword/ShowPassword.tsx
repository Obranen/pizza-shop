import React, {useContext} from 'react'
import classes from './ShowPassword.module.scss'
import {BsFillEyeSlashFill} from 'react-icons/bs'
import {IoEyeSharp} from 'react-icons/io5'
import {Context} from '../../../../context/Input'

const ShowPassword = () => {
  const {showPassword, setIsPassword, isPassword, myClass} = useContext(Context)

  if (!showPassword) {
    return <></>
  }

  return (
    <span
      className={[classes.icon, myClass?.icon].join(' ')}
      onClick={() => setIsPassword ? setIsPassword(prevState => !prevState) : <></>}
    >
      {isPassword ? <BsFillEyeSlashFill/> : <IoEyeSharp/>}
    </span>
  )
}

export default ShowPassword