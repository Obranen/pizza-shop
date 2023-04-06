import React from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Contacts.module.scss'
import {ImMobile} from 'react-icons/im'
import {useLanguage} from '../../../../hooks/useLanguage'
import {useSelectorHook} from '../../../../hooks/useSelectorHook'

const Contacts = () => {
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()

  return (
      <Col xs={12} sm={4}>
        <div className={classes.contacts}>
          <div className={classes.groupPhone}>
            <div className={classes.title}>
              {language(activeOption.value)!.contacts.title}
            </div>
            <div className={classes.phone}>
              <span className={classes.iconKiev}><ImMobile/></span>
              <span className={classes.phoneNumber}>{language(activeOption.value)!.contacts.phone1}</span>
            </div>
            <div className={classes.phone}>
              <span className={classes.iconLife}><ImMobile/></span>
              <span className={classes.phoneNumber}>{language(activeOption.value)!.contacts.phone2}</span>
            </div>
          </div>
        </div>
      </Col>
    )
  }

export default Contacts