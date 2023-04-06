import {useEffect, useState} from 'react'

export const useValidation = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [isRequiredMessage, setIsRequiredMessage] = useState(false)

  const lengthValidation = (
    $InputElement: HTMLInputElement,
    include = false,
    minLength: number | string = 1,
    minLengthMessage = `${$InputElement.value.length} символ(а), не меньше ${minLength}`,
    maxLength: number | string = 10,
    maxLengthMessage = `${$InputElement.value.length} символ(а), не больше ${maxLength}`,
    requiredInclude = true,
    requiredMessage = isRequiredMessage ? `Обязательно для заполнения!` : ''
  ) => {
    const length = $InputElement.value.length
    if (include) {
      if (length > 0 && length < minLength) {
        setErrorMessage(minLengthMessage)
      } else if (length > maxLength) {
        setErrorMessage(maxLengthMessage)
      } else {
        if (requiredInclude && length === 0) {
          setErrorMessage(requiredMessage)
        } else {
          setErrorMessage('')
        }
      }
    }
  }

  const latinValidation = (
    $InputElement: HTMLInputElement,
    include = false,
    message = 'Заполнять только на латинице!',
    requiredInclude = true,
    requiredMessage = isRequiredMessage ? `Обязательно для заполнения!` : ''
  ) => {
    const value = $InputElement.value
    const length = $InputElement.value.length
    if (include) {
      const valueLatin = value.match(/[^A-Za-z]/g)
      if (valueLatin !== null) {
        setErrorMessage(message)
      } else {
        if (requiredInclude && length === 0) {
          setErrorMessage(requiredMessage)
        } else {
          setErrorMessage('latin')
        }
      }
    }
  }

  const passwordValidation = (
    $InputElement: HTMLInputElement,
    include = false,
    message = 'Строка должна содержать хотя бы одно число, спецсимвол, букву латинскую в нижнем и верхнем регистре!',
    valueRepeat = '',
    includeRepeat = false,
    messageRepeat = 'Пароли не совпадают!',
    requiredInclude = true,
    requiredMessage = isRequiredMessage ? `Обязательно для заполнения!` : ''
  ) => {
    const value = $InputElement.value
    const length = $InputElement.value.length
    if (include) {
      const valuePassword = value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g)
      if (include && length > 0 && valuePassword === null) {
        setErrorMessage(message)
      } else {
        if (requiredInclude && length === 0) {
          setErrorMessage(requiredMessage)
        } else {
          setErrorMessage('')
        }
        if (includeRepeat && String(valuePassword) !== String(valueRepeat)) {
          if (length > 0) {
            setErrorMessage(messageRepeat)
          }
        }
      }
    }
  }

  const emailValidation = (
    $InputElement: HTMLInputElement,
    include = false,
    message = 'Не правильно введен email',
    requiredInclude = true,
    requiredMessage = isRequiredMessage ? `Обязательно для заполнения!` : ''
  ) => {
    const value = $InputElement.value
    const length = $InputElement.value.length
    if (include) {
      const valueEmail = value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g)
      if (include && length > 0 && valueEmail === null) {
        setErrorMessage(message)
      } else {
        if (requiredInclude && length === 0) {
          setErrorMessage(requiredMessage)
        } else {
          setErrorMessage('')
        }
      }
    }
  }

  useEffect(() => {
    setIsRequiredMessage(true)
  }, [])

  return {lengthValidation, latinValidation, emailValidation, passwordValidation, errorMessage}
}