import React from 'react'
import {Pagination as ContextPagination} from '../../../../../context/Pagination'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'
import UIPagination from '../../../../ui/Pagination/Pagination'

const Pagination = () => {
  const {filters} = useSelectorHook(state => state.filter)
  const {pages, downloadable} = useSelectorHook(state => state.pagination)

  return (
    <ContextPagination
      arr={filters}
      isDownloadable={downloadable.isDownloadable}
      isPages={pages.isPages}
    >
      <UIPagination/>
    </ContextPagination>
  )
}

export default Pagination