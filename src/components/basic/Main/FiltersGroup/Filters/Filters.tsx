import React, {useEffect, useState} from 'react'
import Sort from './Sort/Sort'
import {Col, Grid, Row} from 'react-flexbox-grid'
import classes from './Filters.module.scss'
import Find from './Find/Find'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'
import {useFilters} from '../../../../../hooks/useFilters'
import {useDispatchHook} from '../../../../../hooks/useDispatchHook'
import {useLanguage} from '../../../../../hooks/useLanguage'
import {useLocation} from 'react-router-dom'
import {IProducts, product} from '../../../../../utils/data/product'

const Filters = () => {
  const {products} = product
  const {downloadable} = useSelectorHook(state => state.pagination)
  const {view} = useSelectorHook(state => state.view)
  const {getFiltersActionFilter, setShowActionPagination, getViewActionView} = useDispatchHook()
  const [sortValue, setSortValue] = useState('')
  const [findValue, setFindValue] = useState('')
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()
  const location = useLocation()
  const [arrayCat, setArrayCat] = useState<IProducts[]>([])
  const [titleCurrentCat, setTitleCurrentCat] = useState('')

  const sortOneLevelLarger = (field: string) => {
    return (a: any, b: any) => a[field] > b[field] ? 1 : -1
  }

  useEffect(() => {
    Object.keys(language(activeOption.value)!.navBar).forEach((key, index) => {
      if (location.pathname === '/' + key) {
        setTitleCurrentCat(Object.values(language(activeOption.value)!.navBar)[index])
        setArrayCat(products.concat().filter((product: IProducts) => product.category === index + 1).sort(sortOneLevelLarger('title')))
      }
    })

    if (view.length === 0) {
      getViewActionView(products.concat())
    }
  }, []) // eslint-disable-line

  const newArray = useFilters(arrayCat, sortValue, findValue)

  useEffect(() => {
    getFiltersActionFilter(newArray)
    setShowActionPagination(downloadable.start)
  }, [findValue, sortValue, arrayCat]) // eslint-disable-line

  const getSortValue = (value: string) => {
    setSortValue(value)
  }

  const getFindValue = (value: string) => {
    setFindValue(value)
  }

  return (
    <Grid fluid>
      <Row className={classes.filters}>
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <h2 className={classes.title}>{titleCurrentCat}</h2>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
          <Find getFindValue={getFindValue}/>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
          <Sort getSortValue={getSortValue}/>
        </Col>
      </Row>
    </Grid>
  )
}

export default Filters