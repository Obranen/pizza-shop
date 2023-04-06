export interface ICategory {
  id: number
  title: string
  href: string
}

interface ICategoryState {
  category: ICategory[]
}

export const category: ICategoryState = {
  category: [
    {
      id: 1,
      title: 'Пицца',
      href: 'pizza'
    },
    {
      id: 2,
      title: 'Бургеры',
      href: 'burgers'
    },
    {
      id: 3,
      title: 'Сеты',
      href: 'sets'
    },
    {
      id: 4,
      title: 'Напитки',
      href: 'drinks'
    }
  ]
}