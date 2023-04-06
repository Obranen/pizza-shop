import React, {useState} from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Subscription.module.scss'
import {HiOutlineMail, HiOutlineMailOpen} from 'react-icons/hi'
import {useSelectorHook} from '../../../../hooks/useSelectorHook'
import {useLanguage} from '../../../../hooks/useLanguage'

const Subscription = () => {
  const [hoverSubscription, setHoverSubscription] = useState(false)
  const {activeOption} = useSelectorHook(state => state.language)
  const {language} = useLanguage()

  const subscriptionMouseEnter = () => {
    setHoverSubscription(true)
  }

  const subscriptionMouseLeave = () => {
    setHoverSubscription(false)
  }

  return (
    <Col xs={12} sm={4}>
      <div
        className={classes.wrapper}
        onMouseEnter={subscriptionMouseEnter}
        onMouseLeave={subscriptionMouseLeave}
      >
        <div className={classes.subscription}>
          <div className={classes.title}>
            <span className={hoverSubscription ? classes.iconOpenEmail : classes.iconCloseEmail}>
              {hoverSubscription ? <HiOutlineMailOpen/> : <HiOutlineMail/>}
            </span>
            {language(activeOption.value)!.subscription.title}
          </div>
          <div className={classes.description}>{language(activeOption.value)!.subscription.description}</div>
        </div>
      </div>
    </Col>
  )
}

export default Subscription