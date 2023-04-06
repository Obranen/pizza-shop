import React, {FC, useState} from 'react'
import classes from './Select.module.scss'

interface IDefaultOption {
  value: string
  text: string
}

interface ISelect {
  options: any[]
  defaultOption?: IDefaultOption
  activeOption: (activeOption: IDefaultOption) => void
  selectName: string
  classWrapper?: string
  classSelect?: string
  classList?: string
  classItem?: string
}

const Select: FC<ISelect> =
  ({
     options,
     defaultOption = {
       value: options[0].value,
       text: options[0].text
     },
     activeOption,
     selectName = 'Сортировать: ',
     classSelect,
     classItem,
     classWrapper,
     classList
   }) => {
    const [isList, setIsList] = useState<boolean>(false)
    const [selectDefault, setSelectDefault] = useState<IDefaultOption>({
      value: defaultOption.value,
      text: defaultOption.text
    })

    const selectClick = () => {
      if (isList) {
        setIsList(false)
      } else {
        setIsList(true)
      }
    }

    const optionClick = (event: React.MouseEvent<HTMLLIElement>) => {
      const target = event.currentTarget
      const valueOption = String(target.getAttribute('data-value'))
      const textOption = target.innerHTML

      setSelectDefault({value: valueOption, text: textOption})
      setIsList(false)
      if (activeOption) {
        activeOption({value: valueOption, text: textOption})
      }
    }
    return (
      <div className={[classes.wrapper, classWrapper].join(' ')}>
        <div className={classes.dropdown}>
          <button onClick={selectClick} className={[classes.select, classSelect].join(' ')}>
            <span className={classes.selectName}>{selectName} </span>
            <span className={classes.selectText}>{selectDefault.text}</span>
          </button>
          {isList ?
            <ul className={[classes.list, classList].join(' ')}>
              {options.map((option, index) =>
                <li
                  key={index}
                  onClick={optionClick}
                  className={[classes.item, classItem].join(' ')}
                  data-value={option.value}
                >
                  {option.text}
                </li>
              )}
            </ul> :
            <></>}
        </div>
      </div>
    )
  }

export default Select