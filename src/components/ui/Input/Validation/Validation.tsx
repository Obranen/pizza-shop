import React, {useContext, useEffect} from 'react'
import {useValidation} from '../../../../hooks/useValidation'
import {Context} from '../../../../context/Input'
import classes from './Validation.module.scss'

const Validation = () => {
  const {errorMessage,  lengthValidation, latinValidation, emailValidation, passwordValidation} = useValidation()
  const {myClass, validation, inputRef, value, getErrorMessage, type} = useContext(Context)

  const validationField = () => {
    if (validation!.include) {
      lengthValidation(
        inputRef.current,
        validation!.length?.include,
        validation!.length?.min,
        validation!.length?.minMessage,
        validation!.length?.max,
        validation!.length?.maxMessage,
        validation?.length?.requiredInclude,
        validation?.length?.requiredMessage
      )

      latinValidation(
        inputRef.current,
        validation!.latin?.include,
        validation!.latin?.message,
        validation?.latin?.requiredInclude,
        validation?.latin?.requiredMessage
      )

      emailValidation(
        inputRef.current,
        validation!.email?.include,
        validation!.email?.message,
        validation?.email?.requiredInclude,
        validation?.email?.requiredMessage
      )

      passwordValidation(
        inputRef.current,
        validation!.password?.include,
        validation!.password?.message,
        validation!.password?.repeat?.value,
        validation!.password?.repeat?.include,
        validation!.password?.repeat?.message,
        validation?.password?.requiredInclude,
        validation?.password?.requiredMessage
      )
    }
  }

  useEffect(() => {
    validationField()
  }, [value]) // eslint-disable-line

  useEffect(() => {
    if (getErrorMessage) {
      getErrorMessage(errorMessage)
    }
  }, [errorMessage]) // eslint-disable-line

  return (
    <span className={type === 'textarea' ? [classes.error, classes.errorTextarea, myClass?.error].join(' ') : [classes.error, myClass?.error].join(' ')}>{errorMessage}</span>
  )
}

export default Validation