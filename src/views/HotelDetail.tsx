import React, { useContext, useEffect, useState } from 'react'
import style from './HotelDetail.module.css'
import HotelDetailCard from '../component/HotelDetail/HotelDetailCard'
import RoomCard from '../component/HotelDetail/RoomCard'
import { useParams } from 'react-router-dom'
import { Store } from '../store/StoreProvider'
import { Ihotel } from '../config/interface'
import { getHotelDetailById } from '../config/GetData'
import { observer } from 'mobx-react'
import RoomList from '../component/HotelDetail/RoomList'

const HotelDetail = () => {

    //得到酒店id
    const params = useParams()
    const hotelId:number = parseInt(params.id!)

    //得到酒店
    const {hotelStore} = useContext(Store)

    //改变当前酒店
    if(hotelStore.currentHotelId != hotelId){
        hotelStore.changeCurrentHotelId(hotelId)
    }

    const hotel:Ihotel = hotelStore.getHotelById(hotelId)


    useEffect(()=>{
        getHotelDetailById(hotelId)
    },[])


  return (
    <div className={style.box}>
        <div className={style.padding}></div>
        <div className={style.content}>
            <div className={style.detailCard}>
                <HotelDetailCard hotel={hotel}></HotelDetailCard>
            </div>
            <div className={style.roomContent}>
                <RoomList></RoomList>
            </div>
        </div>
        <div className={style.padding}></div>
    </div>
  )
}

export default HotelDetail