import {IOption} from '../../utils/data/language'

export interface ILanguageState {
  activeOption: IOption
}

export enum LanguageActionTypes {
  SET_ACTIVE_OPTION_LANGUAGE = 'SET_ACTIVE_OPTION_LANGUAGE'
}

interface ISetActiveOptionLanguageAction {
  type: LanguageActionTypes.SET_ACTIVE_OPTION_LANGUAGE,
  payload: IOption
}

export type LanguageAction = ISetActiveOptionLanguageAction