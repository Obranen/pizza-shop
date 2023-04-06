export interface IOption {
  value: string
  text: string
}

export interface ILanguage {
  contacts: {
    title: string
    phone1: string
    phone2: string
  }
  login: {
    title: string
    button: string
    inputEmail: string
    inputPassword: string
  }
  registration: {
    title: string
    button: string
    inputName: string
    inputEmail: string
    inputPassword: string
    inputPasswordRepeat: string
  }
  restorePassword: {
    title: string
  }
  cart: {
    title: string
  }
  navBar: {
    pizza: string
    burgers: string
    sets: string
    drinks: string
  }
  findProduct: {
    placeholder: string,
  }
  sortProduct: {
    select: string,
    options: {
      alphabetically: string
      descendingPrice: string
      increasePrice: string
      descendingWeight: string
      increaseWeight: string
    }
  }
  paginationDownloadable: {
    title: string
  }
  subscription: {
    title: string,
    description: string
  },
  mobileMenu: {
    title: string
  }
}

export interface ILanguageState {
  options: IOption[]
  ru: ILanguage
  ua: ILanguage
  en: ILanguage
}

export const language: ILanguageState = {
  options: [
    {
      value: 'ru',
      text: 'Русский'
    },
    {
      value: 'ua',
      text: 'Українська'
    },
    {
      value: 'en',
      text: 'English'
    }
  ],

  ru: {
    contacts: {
      title: 'Заказ по телефонам:',
      phone1: '097 123 45 67',
      phone2: '093 987 65 43'
    },
    login: {
      title: 'Вход',
      button: 'Войти',
      inputEmail: 'email',
      inputPassword: 'пароль'
    },
    registration: {
      title: 'Регистрация',
      button: 'Зарегистрировать',
      inputName: 'имя',
      inputEmail: 'email',
      inputPassword: 'пароль',
      inputPasswordRepeat: 'повторить'
    },
    restorePassword: {
      title: 'Восстановить пароль'
    },
    cart: {
      title: 'Корзина'
    },
    navBar: {
      pizza: 'Пицца',
      burgers: 'Бургеры',
      sets: 'Сеты',
      drinks: 'Напитки'
    },
    findProduct: {
      placeholder: 'Поиск'
    },
    sortProduct: {
      select: 'Сортировать: ',
      options: {
        alphabetically: 'по алфавиту',
        descendingPrice: 'по убыванию цены',
        increasePrice: 'по возрастанию цены',
        descendingWeight: 'по убыванию веса',
        increaseWeight: 'по возрастанию веса'
      }
    },
    paginationDownloadable: {
      title: 'Загрузить'
    },
    subscription: {
      title: 'Подпишись!',
      description: 'Новости, скидки, розыгрышы.'
    },
    mobileMenu: {
      title: 'МЕНЮ'
    }
  },

  ua: {
    contacts: {
      title: 'Замовлення по телефонам:',
      phone1: '097 123 45 67',
      phone2: '093 987 65 43'
    },
    login: {
      title: 'Вхід',
      button: 'Увійти',
      inputEmail: 'email',
      inputPassword: 'пароль'
    },
    registration: {
      title: 'Реєстрація',
      button: 'Зареєструвати',
      inputName: 'ім\'я',
      inputEmail: 'email',
      inputPassword: 'пароль',
      inputPasswordRepeat: 'повторити'
    },
    restorePassword: {
      title: 'Відновити пароль'
    },
    cart: {
      title: 'Кошик'
    },
    navBar: {
      pizza: 'Піца',
      burgers: 'Бургери',
      sets: 'Сети',
      drinks: 'Напої'
    },
    findProduct: {
      placeholder: 'Пошук'
    },
    sortProduct: {
      select: 'Сортувати: ',
      options: {
        alphabetically: 'за абеткою',
        descendingPrice: 'за спаданням ціни',
        increasePrice: 'за зростанням ціни',
        descendingWeight: 'за спаданням ваги',
        increaseWeight: 'за зростанням ваги'
      }
    },
    paginationDownloadable: {
      title: 'Завантажити'
    },
    subscription: {
      title: 'Підпишись!',
      description: 'Новини, знижки, розіграші.'
    },
    mobileMenu: {
      title: 'МЕНЮ'
    }
  },

  en: {
    contacts: {
      title: 'Order by phone:',
      phone1: '097 123 45 67',
      phone2: '093 987 65 43'
    },
    login: {
      title: 'Login',
      button: 'Login',
      inputEmail: 'email',
      inputPassword: 'password'
    },
    registration: {
      title: 'Registration',
      button: 'Register',
      inputName: 'name',
      inputEmail: 'email',
      inputPassword: 'password',
      inputPasswordRepeat: 'repeat'
    },
    restorePassword: {
      title: 'Reset Password'
    },
    cart: {
      title: 'Basket'
    },
    navBar: {
      pizza: 'Pizza',
      burgers: 'Burgers',
      sets: 'Sets',
      drinks: 'Drinks'
    },
    findProduct: {
      placeholder: 'Search'
    },
    sortProduct: {
      select: 'Sort: ',
      options: {
        alphabetically: 'by alphabet',
        descendingPrice: 'descending price',
        increasePrice: 'by increasing price',
        descendingWeight: 'by descending weight',
        increaseWeight: 'by increasing weight'
      }
    },
    paginationDownloadable: {
      title: 'Download'
    },
    subscription: {
      title: 'Subscribe!',
      description: 'News, discounts, lotteries.'
    },
    mobileMenu: {
      title: 'MENU'
    }
  }
}