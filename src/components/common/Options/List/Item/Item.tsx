import React, {FC, memo} from 'react'
import Checkbox from '../../../../ui/Checkbox/Checkbox'
import {IOptions, IProducts} from '../../../../../utils/data/product'
import {useDispatchHook} from '../../../../../hooks/useDispatchHook'
import {ImyClasses} from '../../Options'

interface IItem {
  activeOption: IOptions
  product: IProducts
  myClasses?: ImyClasses
}

const Item: FC<IItem> = memo(({activeOption, product, myClasses}) => {
  const {setViewActionView, setTotalPriceActionCart} = useDispatchHook()

  const optionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const $target = event.currentTarget

    setViewActionView({
      ...product,
      options: product.options.map(option => option.id === activeOption.id ? {
        ...option,
        checked: $target.checked
      } : option)
    })

    setTotalPriceActionCart({
      id: product.id,
      price: product.price,
      quantity: product.quantity,
      options: product.options.map(option => option.id === activeOption.id ? {
      ...option,
      checked: $target.checked
    } : option)
    })

  }

  return (
    <Checkbox
      onChange={optionChange}
      name={activeOption.name}
      price={activeOption.price}
      checked={activeOption.checked}
      myClasses={{checkbox: myClasses?.checkbox}}
    />
  )
})

export default Item