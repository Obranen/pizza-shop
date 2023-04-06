import React, {useContext} from 'react'
import classes from './Downloadable.module.scss'
import {useSelectorHook} from '../../../../hooks/useSelectorHook'
import {useLanguage} from '../../../../hooks/useLanguage'
import {useDispatchHook} from '../../../../hooks/useDispatchHook'
import {Context} from '../../../../context/Pagination'
import {language as dataLanguage} from '../../../../utils/data/language'


const Downloadable = () => {
  const {downloadable} = useSelectorHook(state => state.pagination)
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()
  const {setShowActionPagination} = useDispatchHook()
  const {isDownloadable, arr} = useContext(Context)

  const DownloadableClick = () => {
    setShowActionPagination(downloadable.show + downloadable.upload)
  }

  if (arr.length < downloadable.show) {
    return <></>
  }

  if (!isDownloadable) {
    return <></>
  }

  return (
    <div className={[classes.downloadable].join(' ')} onClick={DownloadableClick}>
      <span className={classes.title}>{language(activeOption.value)!.paginationDownloadable.title}</span>
    </div>
  )
}

export default Downloadable