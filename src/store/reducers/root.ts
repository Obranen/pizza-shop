import {combineReducers} from 'redux'
import {modal} from './modal'
import {cart} from './cart'
import {view} from './view'
import {pagination} from './pagination'
import {filter} from './filter'
import {auth} from './auth'
import {order} from './order'
import {menu} from './menu'
import {language} from './language'
import {review} from './review'
import {notify} from './notify'

export const root = combineReducers({
  modal,
  cart,
  view,
  pagination,
  filter,
  auth,
  order,
  menu,
  language,
  review,
  notify
})

export type RootReducer = ReturnType<typeof root>