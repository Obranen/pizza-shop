import React, {FC, useEffect, useRef, useState} from 'react'
import classes from './Modal.module.scss'
import {AiOutlineCloseCircle} from 'react-icons/ai'

interface IModal {
  children?: React.ReactNode
  nameLink?: React.ReactNode
  showClose?: boolean
  navCloseModal?: boolean
  closeOutOfContent?: boolean
  isActiveModal?: boolean
  myClass?: {
    link?: string
    modal?: string
    content?: string
    close?: string
  }
}

const Modal: FC<IModal> =
  ({
     children,
     nameLink = 'Edit name',
     myClass = {
       link: '',
       modal: '',
       content: '',
       close: ''
     },
     navCloseModal = false,
     showClose = true,
     closeOutOfContent = true,
     isActiveModal = false
   }) => {
    const [isModal, setIsModal] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (navCloseModal) {
        closeDelay(false, 700)
      }
    }, [navCloseModal])

    useEffect(() => {
      if (isActiveModal) {
        openModalClick()
      } else {
        closeModalClick()
      }
    }, [isActiveModal]) // eslint-disable-line

    const closeDelay = (isClose: boolean, timer: number) => {
      modalRef.current!.classList.add(classes.hide)
      document.body.classList.remove(classes.bodyOverflowHidden)
      setTimeout(() => {
        setIsModal(isClose)
        if (modalRef.current !== null) {
          modalRef.current!.classList.remove(classes.active, classes.show, classes.hide)
        }
      }, timer)
    }

    const openModalClick = () => {
      modalRef.current!.classList.add(classes.active, classes.show)
      document.body.classList.add(classes.bodyOverflowHidden)
    }

    const closeModalClick = () => {
      closeDelay(false, 700)
    }

    const modalClick = () => {
      if (closeOutOfContent) {
        closeDelay(false, 700)
      }
    }

    const contentClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
    }

    if (isModal) {
      return <></>
    }

    return (
      <>
        <span
          className={[classes.link, myClass!.link].join(' ')}
          onClick={openModalClick}
        >
          {nameLink}
        </span>
        <div
          className={[classes.modal, myClass!.modal].join(' ')}
          onClick={modalClick}
          ref={modalRef}
        >
          <div
            className={[classes.content, myClass!.content].join(' ')}
            onClick={contentClick}
          >
            {showClose ?
              <AiOutlineCloseCircle
                className={[classes.close, myClass!.close].join(' ')}
                onClick={closeModalClick}
              />
              : <></>
            }
            {children}
          </div>
        </div>
      </>
    )
  }

export default Modal