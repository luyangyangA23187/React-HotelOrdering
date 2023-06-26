import React, { useContext } from 'react'
import { Store } from '../../store/StoreProvider'
import RoomCard from './RoomCard'
import { observer } from 'mobx-react'

const RoomList = () => {

    const {hotelStore} = useContext(Store)

  return (
    <div>
        {hotelStore.roomList.map((room)=>(
            <RoomCard room={room}></RoomCard>
        ))}
    </div>
  )
}

export default observer(RoomList)