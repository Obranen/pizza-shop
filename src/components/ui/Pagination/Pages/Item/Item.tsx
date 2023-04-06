import React, {FC, useEffect, useRef} from 'react'
import classes from './Item.module.scss'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'
import {useDispatchHook} from '../../../../../hooks/useDispatchHook'
import {setLastIndexActionPagination} from '../../../../../store/actions/pagination' // eslint-disable-line

interface IItem {
  page: number
}

const Item: FC<IItem> = ({page}) => {
  const {downloadable} = useSelectorHook(state => state.pagination)
  const {setLastIndexActionPagination, setFirstIndexActionPagination} = useDispatchHook()
  const pageRef = useRef<HTMLDivElement | null>(null)

  const itemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const $target = event.currentTarget
    const currentNumber = $target.innerHTML
    const $pagesActive = $target.parentElement!.querySelectorAll(`.${classes.active}`)
    const isActive = $target.classList.contains(classes.active)

    if (!isActive) {
      $pagesActive.forEach((page) => {
        page.classList.remove(classes.active)
      })
      $target.classList.add(classes.active)
    }

    const lastCurrentIndex = Number(currentNumber) * downloadable.upload
    const firstCurrentIndex = lastCurrentIndex - downloadable.upload
    setLastIndexActionPagination(lastCurrentIndex)
    setFirstIndexActionPagination(firstCurrentIndex)
    // const currentArray = arr.slice(firstCurrentIndex, lastCurrentIndex)
  }

  useEffect(() => {
    if (page === 1) {
      pageRef.current!.classList.add(classes.active)
    }
  }, []) // eslint-disable-line

  return (
    <div ref={pageRef} className={[classes.page].join(' ')} onClick={itemClick}>
      {page}
    </div>
  )
}

export default Item