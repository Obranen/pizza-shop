import React from 'react'
import classes from './AuthModal.module.scss'
import Modal from '../../../ui/Modal/Modal'
import Tabs from './Tabs/Tabs'
import Title from './Tabs/Title/Title'
import {useDispatchHook} from '../../../../hooks/useDispatchHook'
import {useSelectorHook} from '../../../../hooks/useSelectorHook'

const AuthModal = () => {
  const {isAuth} = useSelectorHook(state => state.modal)
  const {setIsAuthActionModal} = useDispatchHook()

  const authClick = () => {
    setIsAuthActionModal(true)
  }

  return (
    <div className={classes.auth} onClick={authClick}>
      <Modal
        closeOutOfContent={false}
        nameLink={<Title/>}
        isActiveModal={isAuth}
        showClose={false}
        myClass={{modal: classes.modal, content: classes.content}}
      >
        <Tabs/>
      </Modal>
    </div>
  )
}

export default AuthModal