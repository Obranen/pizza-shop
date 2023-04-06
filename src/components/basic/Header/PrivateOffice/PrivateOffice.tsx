import React from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import MenuTabs from './MenuTabs/MenuTabs'

const PrivateOffice = () => {
  return (
    <Grid fluid>
      <Row>
        <MenuTabs/>
      </Row>
    </Grid>
  )
}

export default PrivateOffice