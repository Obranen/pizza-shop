import {typesRoutes} from './typesRoutes'
import Home from './public/Home/Home'
import Burgers from './public/Burgers/Burgers'
import Drinks from './public/Drinks/Drinks'
import Pizza from './public/Pizza/Pizza'
import Sets from './public/Sets/Sets'
import NotFound from './public/NotFound/NotFound'
import PizzaView from './public/PizzaView/PizzaView'
import BurgersView from './public/BurgersView/BurgersView'
import DrinksView from './public/DrinksView/DrinksView'
import SetsView from './public/SetsView/SetsView'
import PrivateOffice from './auth/PrivateOffice/PrivateOffice'

export const authRoutes = [
  {
    path: typesRoutes.PRIVATE_OFFICE,
    Element: PrivateOffice
  }
]

export const publicRoutes = [
  {
    path: typesRoutes.HOME,
    Element: Home
  },
  {
    path: typesRoutes.BURGERS,
    Element: Burgers
  },
  {
    path: typesRoutes.DRINKS,
    Element: Drinks
  },
  {
    path: typesRoutes.PIZZA,
    Element: Pizza
  },
  {
    path: typesRoutes.SETS,
    Element: Sets
  },
  {
    path: typesRoutes.BURGERS_VIEW,
    Element: BurgersView
  },
  {
    path: typesRoutes.DRINKS_VIEW,
    Element: DrinksView
  },
  {
    path: typesRoutes.PIZZA_VIEW,
    Element: PizzaView
  },
  {
    path: typesRoutes.SETS_VIEW,
    Element: SetsView
  },
  {
    path: typesRoutes.NOT_FOUND,
    Element: NotFound
  }
]