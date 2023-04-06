import React, {useContext} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import Item from './Item/Item'
import classes from './Pages.module.scss'
import {Context} from '../../../../context/Pagination'
import {useSelectorHook} from '../../../../hooks/useSelectorHook'

const Pages = () => {
  const {downloadable} = useSelectorHook(state => state.pagination)
  const {arr, isPages} = useContext(Context)

  const allPages: number[] = []

  const createPages = () => {
    for (let i = 1; i <= Math.ceil(arr.length / downloadable.show); i++) {
      allPages.push(i)
    }
  }

  createPages()

  if (!isPages) {
    return <></>
  }

  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={12}>
          <div className={[classes.groupPages].join(' ')}>
            {allPages.map((page, index) =>
              <Item
                page={page}
                key={index}
              />
            )}
          </div>
        </Col>
      </Row>
    </Grid>
  )
}

export default Pages