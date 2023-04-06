import {LanguageAction, LanguageActionTypes} from '../types/language'
import {IOption} from '../../utils/data/language'

export const setActiveOptionActionLanguage = (option: IOption): LanguageAction => {
  return {type: LanguageActionTypes.SET_ACTIVE_OPTION_LANGUAGE, payload: option}
}