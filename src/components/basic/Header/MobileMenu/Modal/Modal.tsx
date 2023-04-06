import React, {useEffect} from 'react'
import UIModal from '../../../../ui/Modal/Modal'
import classes from './Modal.module.scss'
import List from '../../Navigation/List/List'
import Language from '../../Language/Language'
import AuthModal from '../../AuthModal/AuthModal'
import CartModal from '../../CartModal/CartModal'
import {Col, Row} from 'react-flexbox-grid'
import {useSelectorHook} from '../../../../../hooks/useSelectorHook'
import {useDispatchHook} from '../../../../../hooks/useDispatchHook'
import LinkPrivateOffice from '../../LinkPrivateOffice/LinkPrivateOffice'
import {useLanguage} from '../../../../../hooks/useLanguage'

const Modal = () => {
  const {isClickLink} = useSelectorHook(state => state.menu)
  const {isAuth} = useSelectorHook(state => state.auth)
  const {setIsClickLinkMenuActionMenu} = useDispatchHook()
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isClickLink) {
      timer = setTimeout(() => {
        setIsClickLinkMenuActionMenu(false)
      }, 700)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [isClickLink]) // eslint-disable-line

  return (
    <>
      <UIModal
        closeOutOfContent={false}
        nameLink={language(activeOption.value)!.mobileMenu.title}
        navCloseModal={isClickLink}
        myClass={{
          link: classes.link,
          content: classes.content,
          close: classes.close
        }}
      >
        <h4 className={classes.title}>Меню:</h4>

        <Row>
          <Col xs={12} sm={12} mdOffset={2} md={8} lgOffset={3} lg={6} xlOffset={4} xl={4} className={classes.navBar}>
            <List/>
          </Col>
        </Row>

        <div className={classes.hr}>
          <Language/>
          {isAuth ? <LinkPrivateOffice/> : <AuthModal/>}
          <div className={classes.cartModal}>
            <CartModal/>
          </div>
        </div>
      </UIModal>
    </>
  )
}

export default Modal