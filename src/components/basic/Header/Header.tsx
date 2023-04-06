import React, {useEffect, useState} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import classes from './Header.module.scss'
import Contacts from './Сontacts/Contacts'
import Logo from './Logo/Logo'
import MobileMenu from './MobileMenu/MobileMenu'
import Language from './Language/Language'
import CartModal from './CartModal/CartModal'
import AuthModal from './AuthModal/AuthModal'
import {useDispatchHook} from '../../../hooks/useDispatchHook'
import Navigation from './Navigation/Navigation'
import {useSelectorHook} from '../../../hooks/useSelectorHook'
import LinkPrivateOffice from './LinkPrivateOffice/LinkPrivateOffice'

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const {isAuth} = useSelectorHook(state => state.auth)
  const {setIsAuthActionAuth} = useDispatchHook()

  const headerPadding = () => {
    if (window.innerWidth >= 992) {
      const headerHeight = document.querySelector(`.${classes.header}`)!.clientHeight
      setHeaderHeight(headerHeight)
    }
  }

  const checkAuth = () => {
    const login = JSON.parse(localStorage.getItem('login')!)
    if (login) {
      setIsAuthActionAuth(true)
    }
  }

  useEffect(() => {
    headerPadding()
    checkAuth()
  }, []) // eslint-disable-line

  return (
    <div className={classes.headerWrapper} style={{paddingBottom: headerHeight}}>
      <div className={classes.header}>
        <Grid fluid>
          <Row>
            <Contacts/>
            <Logo/>
            <Col xs={12} sm={4}>
              <div className={classes.navInfo}>
                <Language/>
                {isAuth ? <LinkPrivateOffice/> : <AuthModal/>}
                <CartModal/>
              </div>
            </Col>
          </Row>
          <Row>
            <Navigation/>
          </Row>
        </Grid>
        <MobileMenu/>
      </div>
    </div>
  )
}

export default Header