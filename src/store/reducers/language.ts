import {ILanguageState, LanguageActionTypes} from '../types/language'

const initialState: ILanguageState = {
  activeOption: {
    value: 'ru',
    text: 'Русский'
  }
}

export const language = (state = initialState, action: any): ILanguageState => {
  switch (action.type) {
    case LanguageActionTypes.SET_ACTIVE_OPTION_LANGUAGE:
      return {
        ...state,
        activeOption: action.payload
      }
    default: return state
  }
}