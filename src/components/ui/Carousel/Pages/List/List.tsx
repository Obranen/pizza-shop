import React from 'react'
import Item from './Item/Item'
import {useCarousel} from '../../../../../hooks/useCarousel'

const List = () => {
  const {createArrayPages} = useCarousel()
  const pages = createArrayPages()

  return (
    <>
      {pages.map((page, index) =>
        <Item
          key={index}
          page={page}
        />
      )}
    </>
  )
}

export default List