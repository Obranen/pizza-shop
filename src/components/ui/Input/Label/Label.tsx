import React, {useContext, useEffect} from 'react'
import classes from './Label.module.scss'
import {nanoid} from 'nanoid'
import {Context} from '../../../../context/Input'

const Label = () => {
  const {
    myClass,
    label,
    labelRef,
    setRandomID,
    inputRef,
    randomID,
    placeholder,
    validation
  } = useContext(Context)

  const riseLabelFunction = () => {
    if (label?.show && label?.rise) {
      if (inputRef.current.value === '') {
        labelRef.current.classList.remove(classes.labelShow)
        labelRef.current.classList.add(classes.labelHide)
      } else {
        labelRef.current.classList.remove(classes.labelHide)
        labelRef.current.classList.add(classes.labelShow)
      }
    }
  }

  useEffect(() => {
    if (setRandomID) {
      setRandomID(nanoid())
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    riseLabelFunction()
  }, [inputRef.current.value]) // eslint-disable-line

  if (!label?.show) {
    return <></>
  }

  return (
    <label
      htmlFor={randomID}
      className={[classes.label, myClass?.label].join(' ')}
      ref={labelRef}
    >
      {validation?.include ?
        <>
          {label.title || placeholder}
          <span className={classes.required}>*</span>
        </> :
        label.title || placeholder
      }
    </label>
  )
}

export default Label