import React, {useState} from 'react'
import UIInput from '../../../../../ui/Input/Input'
import classes from './RegistrationForm.module.scss'
import Button from '../../../../../ui/Button/Button'
import {useLanguage} from '../../../../../../hooks/useLanguage'
import {Input} from '../../../../../../context/Input'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'
import {useDispatchHook} from '../../../../../../hooks/useDispatchHook'
import {useNavigate} from 'react-router-dom'
import {typesRoutes} from '../../../../../../pages/typesRoutes'

const RegistrationForm = () => {
  const {activeOption} = useSelectorHook(state => state.language)
  const {setNotifyActionNotify, setIsAuthActionAuth, setIsAuthActionModal} = useDispatchHook()
  const navigate = useNavigate()
  const {language} = useLanguage()
  const [regValue, setRegValue] = useState({name: '', email: '', password: '', passwordRepeat: ''})
  const [regError, setRegError] = useState({name: '', email: '', password: '', passwordRepeat: ''})

  const submitClick = () => {
    const values = Object.values(regValue).filter((value) => value === '')
    const messages = Object.values(regError).filter((error) => error !== '')

    if (values.length === 0) {
      if (messages.length === 0) {
        localStorage.setItem(`user`, JSON.stringify(regValue))
        setNotifyActionNotify({message: 'Вы зарегистрировались и авторизовались', isNotify: true, styleState: 'success', time: 4000})
        setRegValue({name: '', email: '', password: '', passwordRepeat: ''})
        setIsAuthActionAuth(true)
        localStorage.setItem(`login`, JSON.stringify(true))
        setIsAuthActionModal(false)
        navigate(typesRoutes.PRIVATE_OFFICE)
      } else {
        setNotifyActionNotify({message: messages[0], isNotify: true})
      }
    } else {
      setNotifyActionNotify({message: 'Заполните обязательные поля!', isNotify: true})
    }
  }

  return (
    <div className={classes.registration}>
      <h3 className={classes.title}>{language(activeOption.value)!.registration.title}</h3>

      <Input
        type={'text'}
        placeholder={language(activeOption.value)!.registration.inputName}
        onChange={(e) => setRegValue({...regValue, name: e.currentTarget.value})}
        value={regValue.name}
        label={{show: true, rise: true}}
        validation={{include: true, length: {include: true, min: '3', max: '10'}}}
        getErrorMessage={(errorMessage) => setRegError({...regError, name: errorMessage})}
        myClass={{wrapper: classes.wrapperInput, label: classes.labelInput, input: classes.input}}
      >
        <UIInput/>
      </Input>

      <Input
        type={'email'}
        placeholder={language(activeOption.value)!.registration.inputEmail}
        onChange={(e) => setRegValue({...regValue, email: e.currentTarget.value})}
        value={regValue.email}
        label={{show: true, rise: true}}
        validation={{include: true, email: {include: true}}}
        getErrorMessage={(errorMessage) => setRegError({...regError, email: errorMessage})}
        myClass={{wrapper: classes.wrapperInput, label: classes.labelInput, input: classes.input}}
      >
        <UIInput/>
      </Input>

      <Input
        type={'password'}
        placeholder={language(activeOption.value)!.registration.inputPassword}
        onChange={(e) => setRegValue({...regValue, password: e.currentTarget.value})}
        value={regValue.password}
        showPassword={true}
        label={{show: true, rise: true}}
        validation={{include: true, password: {include: true}}}
        getErrorMessage={(errorMessage) => setRegError({...regError, password: errorMessage})}
        myClass={{wrapper: classes.wrapperInput, label: classes.labelInput, input: classes.input}}
      >
        <UIInput/>
      </Input>

      <Input
        type={'password'}
        placeholder={language(activeOption.value)!.registration.inputPasswordRepeat}
        onChange={(e) => setRegValue({...regValue, passwordRepeat: e.currentTarget.value})}
        value={regValue.passwordRepeat}
        showPassword={true}
        label={{show: true, rise: true}}
        validation={{include: true, password: {include: true, repeat: {include: true, value: regValue.password}}}}
        getErrorMessage={(errorMessage) => setRegError({...regError, passwordRepeat: errorMessage})}
        myClass={{wrapper: classes.wrapperInput, label: classes.labelInput, input: classes.input}}
      >
        <UIInput/>
      </Input>

      <Button className={classes.submit} onClick={submitClick}>
        {language(activeOption.value)!.registration.button}
      </Button>
    </div>
  )
}

export default RegistrationForm