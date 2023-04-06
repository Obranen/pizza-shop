import React, {FC} from 'react'
import classes from './DeleteProduct.module.scss'
import {useDispatchHook} from '../../../../../../../../hooks/useDispatchHook'
import {MdDeleteForever} from 'react-icons/md'

interface ICartDeleteProduct {
  productId: number
}

const DeleteProduct: FC<ICartDeleteProduct> =
  ({productId}) => {
    const {setDeleteProductActionCart, setClearClassesActionCart} = useDispatchHook()

    const deleteClick = () => {
      setDeleteProductActionCart(productId)
      setClearClassesActionCart(productId)
    }

    return (
      <div onClick={deleteClick} className={classes.wrapperIcon}>
        {<MdDeleteForever className={classes.icon}/>}
      </div>
    )
  }

export default DeleteProduct