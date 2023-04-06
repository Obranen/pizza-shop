import React, {FC, useState} from 'react'
import UIInput from '../../../../../ui/Input/Input'
import classes from './Find.module.scss'
import {useLanguage} from '../../../../../../hooks/useLanguage'
import {Input} from '../../../../../../context/Input'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'

interface IFind {
  getFindValue: (value: string) => void
}

const Find: FC<IFind> = ({getFindValue}) => {
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()
  const [findValue, setFindValue] = useState<string>('')

  const findChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const $target = event.currentTarget
    setFindValue($target.value)

    setTimeout(() => {
      getFindValue($target.value)
    }, 1000)
  }

  const clearFindClick = () => {
    setTimeout(() => {
      getFindValue('')
    }, 1000)
    setFindValue('')
  }

  return (
    <div className={classes.wrapper}>
      <Input
        type={'text'}
        value={findValue}
        onChange={findChange}
        myClass={{
          input: classes.find,
          clearField: classes.clearFind
        }}
        placeholder={language(activeOption.value)!.findProduct.placeholder}
        clearField={{
          show: true,
          onClick: clearFindClick
        }}
      >
        <UIInput/>
      </Input>

    </div>
  )
}

export default Find