import * as ModalAction from './modal'
import * as CartAction from './cart'
import * as ViewAction from './view'
import * as PaginationAction from './pagination'
import * as FilterAction from './filter'
import * as AuthAction from './auth'
import * as OrderAction from './order'
import * as MenuAction from './menu'
import * as LanguageAction from './language'
import * as ReviewAction from './review'
import * as NotifyAction from './notify'

const root = {
  ...ModalAction,
  ...CartAction,
  ...ViewAction,
  ...PaginationAction,
  ...FilterAction,
  ...AuthAction,
  ...OrderAction,
  ...MenuAction,
  ...LanguageAction,
  ...ReviewAction,
  ...NotifyAction
}

export default root