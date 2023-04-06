import React, {FC, useMemo} from 'react'
import Select from '../../../../../ui/Select/Select'
import classes from './Sort.module.scss'
import {useLanguage} from '../../../../../../hooks/useLanguage'
import {IOption} from '../../../../../../utils/data/language'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'

interface ISort {
  getSortValue: (value: string) => void
}

const Sort: FC<ISort> = ({getSortValue}) => {
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()
  const optionsSort = useMemo(() => {
    return [
      {
        value: 'alphabetically',
        text: language(activeOption.value)!.sortProduct.options.alphabetically
      },
      {
        value: 'descendingPrice',
        text: language(activeOption.value)!.sortProduct.options.descendingPrice
      },
      {
        value: 'increasePrice',
        text: language(activeOption.value)!.sortProduct.options.increasePrice
      },
      {
        value: 'descendingWeight',
        text: language(activeOption.value)!.sortProduct.options.descendingWeight
      },
      {
        value: 'increaseWeight',
        text: language(activeOption.value)!.sortProduct.options.increaseWeight
      }
    ]
  }, [activeOption.value]) // eslint-disable-line

  const optionSort = (option: IOption) => {
    getSortValue(option.value)
  }

  return (
    <Select
      options={optionsSort}
      activeOption={optionSort}
      classWrapper={classes.wrapper}
      classSelect={classes.select}
      selectName={language(activeOption.value)!.sortProduct.select}
    />
  )
}

export default Sort