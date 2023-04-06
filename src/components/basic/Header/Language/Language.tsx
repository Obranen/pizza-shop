import React from 'react'
import classes from './Language.module.scss'
import Select from '../../../ui/Select/Select'
import {useDispatchHook} from '../../../../hooks/useDispatchHook'
import {IOption} from '../../../../utils/data/language'
import {language as dataLanguage} from '../../../../utils/data/language'
import {useSelectorHook} from '../../../../hooks/useSelectorHook'

const Language = () => {
  const {options} = dataLanguage
  const {setActiveOptionActionLanguage} = useDispatchHook()
  const {activeOption} = useSelectorHook(state => state.language)

  const activeOptionSelect = (option: IOption) => {
    setActiveOptionActionLanguage(option)
  }

  return (
    <div className={classes.language}>
      <div className={classes.lang}>
        <Select
          options={options}
          selectName={''}
          activeOption={activeOptionSelect}
          defaultOption={activeOption}
          classSelect={classes.select}
          classItem={classes.item}
          classWrapper={classes.wrapper}
          classList={classes.list}
        />
      </div>
    </div>
  )
}

export default Language