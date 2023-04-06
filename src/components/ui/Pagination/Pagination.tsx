import React from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import Downloadable from './Downloadable/Downloadable'
import Pages from './Pages/Pages'

const Pagination = () => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={12}>
          <Pages/>
          <Downloadable/>
        </Col>
      </Row>
    </Grid>
  )
}

export default Pagination