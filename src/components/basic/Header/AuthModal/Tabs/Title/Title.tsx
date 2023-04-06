import React from 'react'
import {BiLogIn} from 'react-icons/bi'
import {useLanguage} from '../../../../../../hooks/useLanguage'
import classes from './Title.module.scss'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'

const Title = () => {
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()

  return (
    <>
      <BiLogIn className={classes.icon}/>{language(activeOption.value)!.login.title}
    </>
  )
}

export default Title