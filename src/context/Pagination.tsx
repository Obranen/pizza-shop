import React, {createContext, FC} from 'react'

interface IPagination {
  arr: any[]
  isDownloadable?: boolean
  isPages?: boolean
  children?: React.ReactNode
}

export const Context = createContext({} as IPagination)

export const Pagination: FC<IPagination> =
  ({
     arr,
     isDownloadable = false,
     isPages = false,
     children
   }) => {

    return (
      <Context.Provider value={{arr, isDownloadable, isPages}}>
        {children}
      </Context.Provider>
    )
  }