import React, {useState} from 'react'
import UIInput from '../../../../../ui/Input/Input'
import classes from './LoginForm.module.scss'
import Button from '../../../../../ui/Button/Button'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'
import {useLanguage} from '../../../../../../hooks/useLanguage'
import {Input} from '../../../../../../context/Input'
import {useDispatchHook} from '../../../../../../hooks/useDispatchHook'
import {useNavigate} from 'react-router-dom'
import {typesRoutes} from '../../../../../../pages/typesRoutes'

const LoginForm = () => {
  const {activeOption} = useSelectorHook(state => state.language)
  const {cart} = useSelectorHook(state => state.cart)
  const {setIsAuthActionAuth, setIsCartActionModal, setIsAuthActionModal, setNotifyActionNotify} = useDispatchHook()
  const navigate = useNavigate()
  const {language} = useLanguage()
  const [loginValue, setLoginValue] = useState({email: '', password: ''})
  const [logError, setLogError] = useState({name: '', email: '', password: ''})

  const submitClick = () => {
    const values = Object.values(loginValue).filter((value) => value === '')
    const messages = Object.values(logError).filter((error) => error !== '')

    if (values.length === 0) {
      if (messages.length === 0) {
        if (localStorage.getItem('user')) {
          const user = JSON.parse(localStorage.getItem('user')!)
          if (user.email === loginValue.email && user.password === loginValue.password) {
            setIsAuthActionAuth(true)
            localStorage.setItem(`login`, JSON.stringify(true))
            setIsAuthActionModal(false)
            setNotifyActionNotify({message: 'Вы авторизовались', isNotify: true, styleState: 'success', time: 4000})
            if (cart.length !== 0) {
              setIsCartActionModal(true)
              navigate(typesRoutes.PRIVATE_OFFICE)
            }
          } else {
            setNotifyActionNotify({message: 'Не правильный пароль или Email', isNotify: true})
          }
        }
      } else {
        setNotifyActionNotify({message: messages[0], isNotify: true})
      }
    } else {
      setNotifyActionNotify({message: 'Заполните обязательные поля!', isNotify: true})
    }
  }

  return (
    <div className={classes.login}>
      <h3 className={classes.title}>{language(activeOption.value)!.login.title}</h3>

      <Input
        type={'text'}
        placeholder={language(activeOption.value)!.login.inputEmail}
        onChange={(e) => setLoginValue({...loginValue, email: e.currentTarget.value})}
        value={loginValue.email}
        label={{show: true, rise: true}}
        validation={{include: true, email: {include: true}}}
        myClass={{wrapper: classes.wrapperInput, label: classes.labelInput, input: classes.input}}
        getErrorMessage={(errorMessage) => setLogError({...logError, name: errorMessage})}
      >
        <UIInput/>
      </Input>

      <Input
        type={'password'}
        placeholder={language(activeOption.value)!.login.inputPassword}
        onChange={(e) => setLoginValue({...loginValue, password: e.currentTarget.value})}
        value={loginValue.password}
        showPassword={true}
        label={{show: true, rise: true}}
        validation={{include: true, password: {include: true}}}
        myClass={{wrapper: classes.wrapperInput, label: classes.labelInput, input: classes.input}}
        getErrorMessage={(errorMessage) => setLogError({...logError, name: errorMessage})}
      >
        <UIInput/>
      </Input>

      <Button
        className={classes.submit}
        onClick={submitClick}
      >{language(activeOption.value)!.login.button}</Button>
    </div>
  )
}

export default LoginForm