import {language as dataLanguage} from '../utils/data/language'

export const useLanguage = () => {
  const {ua, ru, en} = dataLanguage

  const language = (lang: string) => {
    if (lang === 'ru') {
      return ru
    } else if (lang === 'ua') {
      return ua
    } else if (lang === 'en') {
      return en
    }
  }
  return {language}
}