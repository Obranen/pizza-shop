import React from 'react'
import UITabs from '../../../../ui/Tabs/Tabs'
import {Tabs as ContextTabs} from '../../../../../context/Tabs'
import LoginForm from './LoginForm/LoginForm'
import {useLanguage} from '../../../../../hooks/useLanguage'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import Close from './Close/Close'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'
import classes from './Tabs.module.scss'

const Tabs = () => {
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()

  const tabs = [
    {
      id: 1,
      title: language(activeOption.value)!.login.title
    },
    {
      id: 2,
      title: language(activeOption.value)!.registration.title
    }
  ]
  const contents = [
    {
      id: 1,
      contentItem: <LoginForm/>
    },
    {
      id: 2,
      contentItem: <RegistrationForm/>
    }
  ]

  return (
    <ContextTabs
      tabs={tabs}
      contents={contents}
      locationTabs={'row'}
      myClasses={{tabsList: classes.tabsList, tabsItem: classes.tabsItem}}
    >
      <Close/>
      <UITabs/>
    </ContextTabs>
  )
}

export default Tabs