import React from 'react'
import Item from './Item/Item'
import {typesRoutes} from '../../../../../pages/typesRoutes'
import {useLanguage} from '../../../../../hooks/useLanguage'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'

const List = () => {
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()

  const nav: any = {
    [language(activeOption.value)!.navBar.pizza]: typesRoutes.PIZZA,
    [language(activeOption.value)!.navBar.burgers]: typesRoutes.BURGERS,
    [language(activeOption.value)!.navBar.sets]: typesRoutes.SETS,
    [language(activeOption.value)!.navBar.drinks]: typesRoutes.DRINKS
  }

  return (
    <>
      {Object.keys(nav).map((navValue, index) => (
        <Item
          key={index}
          navValue={nav[navValue]}
          navKey={navValue}
        />
      ))}
    </>
  )
}

export default List