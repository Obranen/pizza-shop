import React, {FC, memo} from 'react'
import classes from './Checkbox.module.scss'

interface IMyClasses {
  wrapper?: string
  checkbox?: string
  name?: string
  price?: string
}

interface ICheckbox {
  name: string
  price: number
  checked: boolean
  onChange?: (event: any) => void
  myClasses?: IMyClasses
}

const Checkbox: FC<ICheckbox> = memo(({onChange, price, name, checked, myClasses}) => {

  return (
    <div className={[classes.wrapper, myClasses!.wrapper].join(' ')}>
      <label className={[classes.checkbox, myClasses!.checkbox].join(' ')}>
        <input onChange={onChange} type={'checkbox'} checked={checked}/>
        <span className={[classes.name, myClasses!.name].join(' ')}>{name}</span>
        <span className={classes.additionalPrice}><span className={[classes.price, myClasses!.price].join(' ')}>+{price}</span> грн</span>
      </label>
    </div>
  )
})

export default Checkbox