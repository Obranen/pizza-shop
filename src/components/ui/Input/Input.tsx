import React, {useContext} from 'react'
import classes from './Input.module.scss'
import {Context} from '../../../context/Input'
import Validation from './Validation/Validation'
import Label from './Label/Label'
import ShowPassword from './ShowPassword/ShowPassword'
import ClearField from './ClearField/ClearField'

const Input = () => {
  const {
    randomID,
    myClass,
    inputRef,
    type,
    isPassword,
    placeholder,
    name,
    value,
    label,
    onChange,
    validation
  } = useContext(Context)

  return (
    <div className={type === 'textarea' ? [classes.wrapperTextarea, myClass?.wrapper].join(' ') : [classes.wrapper, myClass?.wrapper].join(' ')}>
      <Label/>
      <div className={[classes.inputWrapper, myClass?.inputWrapper].join(' ')}>
        {type === 'textarea' ?
          <textarea
            onChange={onChange}
            className={classes.textarea}
            placeholder={validation?.include ? `${placeholder}*` : placeholder}
            value={value}
            id={randomID}
            ref={inputRef}
          ></textarea> :
          <input
            onChange={onChange}
            value={value}
            name={name}
            placeholder={validation?.include ? `${placeholder}*` : placeholder}
            type={isPassword ? 'text' : type}
            className={[label?.show && label.rise ? classes.inputRise : classes.input, myClass?.input].join(' ')}
            id={randomID}
            ref={inputRef}
          />
        }
        <ClearField/>
        <ShowPassword/>
      </div>
      <Validation/>
    </div>
  )
}

export default Input