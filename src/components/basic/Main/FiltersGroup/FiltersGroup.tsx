import React from 'react'
import Filters from './Filters/Filters'
import Pagination from './Pagination/Pagination'
import FiltersList from './FiltersList/FiltersList'

const FiltersGroup = () => {
  return (
    <>
      <Filters/>
      <FiltersList/>
      <Pagination/>
    </>
  )
}

export default FiltersGroup