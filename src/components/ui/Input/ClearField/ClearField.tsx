import React, {useContext} from 'react'
import {CgCloseR} from 'react-icons/cg'
import classes from './ClearField.module.scss'
import {Context} from '../../../../context/Input'

const ClearField = () => {
  const {clearField, myClass} = useContext(Context)

  if (!clearField?.show) {
    return <></>
  }

  return (
    <div className={[classes.clearFind, myClass?.clearField].join(' ')} onClick={clearField.onClick}>
      <CgCloseR/>
    </div>
  )
}

export default ClearField