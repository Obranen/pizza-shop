import React from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'
import Item from './Item/Item'
import ProductNotFound from './ProductNotFound/ProductNotFound'

const FiltersList = () => {
  const {filters} = useSelectorHook(state => state.filter)

  if (filters.length === 0) {
    return <ProductNotFound/>
  }

  return (
    <Grid fluid>
      <Row>
        {filters.map((filterProduct, index) =>
          <Item
            filterProduct={filterProduct}
            index={index}
            key={filterProduct.id}
          />
        )}
      </Row>
    </Grid>
  )
}

export default FiltersList