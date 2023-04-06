import React, {useEffect, useState} from 'react'
import classes from './MobileMenu.module.scss'
import Modal from './Modal/Modal'

const MobileMenu = () => {
  const [isHeightScrollTop, setIsHeightScrollTop] = useState<boolean>(false)

  useEffect(() => {
    fixedMobileMenu()
  }, [isHeightScrollTop]) // eslint-disable-line
  
  useEffect(() => {
    document.removeEventListener('scroll', heightScroll)
    document.addEventListener('scroll', heightScroll)
    return () => {
      document.removeEventListener('scroll', heightScroll)
    }
  }, [])

  const fixedMobileMenu = () => {
    if (isHeightScrollTop) {
      const $mobileMenu = document.querySelector(`.${classes.mobileMenu}`)!
      $mobileMenu.classList.add(classes.fixed)
      $mobileMenu.parentElement!.classList.add(classes.marginBottom)
    } else {
    const $mobileMenu = document.querySelector(`.${classes.mobileMenu}`)!
      if ($mobileMenu.classList.contains(classes.fixed)) {
        $mobileMenu.classList.remove(classes.fixed)
        $mobileMenu.parentElement!.classList.remove(classes.marginBottom)
      }
    }
  }

  const heightScroll = (event: any) => {
    const heightScrollTop = event.target.documentElement.scrollTop
    if (heightScrollTop > 134) {
      setIsHeightScrollTop(true)
    } else {
      setIsHeightScrollTop(false)
    }
  }

  return (
    <div className={classes.mobileMenu}>
      <Modal/>
    </div>
  )
}

export default MobileMenu