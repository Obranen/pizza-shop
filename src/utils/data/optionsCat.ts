export interface IOptionsCat {
  id: number
  title: string
}

export interface IOptionsCatState {
  optionsCat: IOptionsCat[]
}

export const optionsCat: IOptionsCatState = {
  optionsCat: [
    {
      id: 1,
      title: 'Добавки'
    },
    {
      id: 2,
      title: 'Смеси'
    }
  ]
}