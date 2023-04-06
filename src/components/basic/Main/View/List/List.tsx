import React from 'react'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'
import NotFound from '../../../../../pages/public/NotFound/NotFound'
import Item from './Item/Item'

const List = () => {
  const {viewId, view} = useSelectorHook(state => state.view)

  if (viewId === null) {
    return <NotFound/>
  }

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