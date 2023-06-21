import React from 'react'
import {createContext} from 'react'
import hotelStore from './HotelListStore'
import userStore from './UserStore'

export const Store = createContext({hotelStore,userStore})

const StoreProvider:React.FC<{children:React.ReactNode[]|React.ReactNode}> = (props) => {
  return (
    <Store.Provider value = {{hotelStore,userStore}}>
    {props.children}
    </Store.Provider>
  )
}

export default StoreProvider