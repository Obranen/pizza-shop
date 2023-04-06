import React, {createContext, FC, useRef, useState} from 'react'

export interface ILength {
  include?: boolean
  min?: string
  minMessage?: string
  max?: string
  maxMessage?: string
  requiredInclude?: boolean
  requiredMessage?: string
}

export interface ILatin {
  include?: boolean
  message?: string
  requiredInclude?: boolean
  requiredMessage?: string
}

export interface IEmail {
  include?: boolean
  message?: string
  requiredInclude?: boolean
  requiredMessage?: string
}

export interface IPassword {
  include?: boolean
  message?: string
  repeat?: {
    include?: boolean
    value?: string
    message?: string
  }
  requiredInclude?: boolean
  requiredMessage?: string
}

interface ILabel {
  show: boolean
  title?: string
  rise: boolean
}

interface IMyClass {
  input?: string
  icon?: string
  wrapper?: string
  label?: string
  inputWrapper?: string
  error?: string
  clearField?: string
}

interface IInput {
  type: string
  name?: string
  value: string
  placeholder: string
  onChange: (event: any) => void
  myClass?: IMyClass
  showPassword?: boolean
  label?: ILabel
  validation?: {
    include?: boolean
    length?: ILength
    latin?: ILatin
    email?: IEmail
    password?: IPassword
  }
  clearField?: {
    show?: boolean
    onClick?: (event: any) => void
  }
  randomID?: string,
  setRandomID?: (nanoid: string) => void
  isPassword?: boolean
  setIsPassword?: (nanoid: (prevState: any) => boolean) => void
  inputRef?: any
  labelRef?: any
  getErrorMessage?: (message: string) => void
  children?: React.ReactNode
}

export const Context = createContext({} as IInput)

export const Input: FC<IInput> =
  ({
     showPassword = false,
     label = {
       show: false,
       rise: true
     },
     validation = {
       include: false
     },
     clearField = {
       show: false
     },
     value,
     name,
     type,
     placeholder,
     myClass,
     onChange,
     getErrorMessage,
     children
   }) => {
    const [isPassword, setIsPassword] = useState(false)
    const [randomID, setRandomID] = useState<string>('')
    const inputRef = useRef<any>('')
    const labelRef = useRef<any>('')

    return (
      <Context.Provider value={{
        inputRef,
        labelRef,
        setRandomID,
        label,
        validation,
        randomID,
        isPassword,
        setIsPassword,
        showPassword,
        value,
        name,
        type,
        placeholder,
        myClass,
        onChange,
        clearField,
        getErrorMessage
      }}>
        {children}
      </Context.Provider>
    )
  }