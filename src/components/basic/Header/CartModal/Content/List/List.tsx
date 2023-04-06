import React from 'react'
import {useSelectorHook} from '../../../../../../hooks/useSelectorHook'
import Item from './Item/Item'

const List = () => {
  const {view} = useSelectorHook(state => state.view)

  return (
    <>
      {view.map((viewProduct) =>
        <Item
          viewProduct={viewProduct}
          key={viewProduct.id}
        />
      )}
    </>
  )
}

export default List