import React, { useContext } from 'react'
import { Store } from '../../store/StoreProvider'
import RoomCard from './RoomCard'
import { observer } from 'mobx-react'
import { Ibreakfast } from '../../config/interface'

const RoomList = () => {

    const {hotelStore} = useContext(Store)

    const breakfastList:Ibreakfast[] = hotelStore.breakfastList

  return (
    <div>
        {hotelStore.roomList.map((room)=>(
            <RoomCard room={room} breakfastList={breakfastList} key={room.id}></RoomCard>
        ))}
    </div>
  )
}

export default observer(RoomList)