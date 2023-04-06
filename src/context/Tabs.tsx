import React, {createContext, FC, useMemo, useState} from 'react'
import {nanoid} from 'nanoid'

type LocationTabsType = 'row' | 'column'

interface IMyClasses {
  main?: string
  tabsList?: string
  tabsItem?: string
  contentList?: string
  contentItem?: string
}

interface ITabsState {
  id: number,
  title: React.ReactNode
}

interface IContentsState {
  id: number,
  contentItem: React.ReactNode
}

interface ITabs {
  tabs: ITabsState[]
  contents: IContentsState[]
  locationTabs?: LocationTabsType
  myClasses?: IMyClasses
  currentTabId?: number
  setCurrentTabId?: (number: number) => void
  children?: React.ReactNode
}

export const Context = createContext({} as ITabs)

export const Tabs: FC<ITabs> =
  ({
     tabs,
     contents,
     locationTabs = 'row',
     myClasses ,
     children
   }) => {
    const [currentTabId, setCurrentTabId] = useState<number>(1)

    return (
      <Context.Provider value={{tabs, contents, currentTabId, setCurrentTabId, locationTabs, myClasses}}>
        {children}
      </Context.Provider>
    )
  }