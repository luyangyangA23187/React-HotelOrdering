import React, { useContext, useEffect } from 'react'
import style from './HotelList.module.css'
import SelectMenu from '../component/HotelList/SelectMenu'
import GMap from '../component/GMap/GMap'
import HotelListShow from '../component/HotelList/HotelListShow'

const HotelList:React.FC = () => {
  return (
    <div className={style.box}>
        <div className={style.padding}></div>
        <div className={style.content}>
            <div className={style.SelectMenu}>
                <SelectMenu></SelectMenu>
            </div>
            <div className={style.list}>
                <HotelListShow></HotelListShow>
            </div>
            <div className={style.map}>
                  <GMap></GMap>
            </div>
        </div>
        <div className={style.padding}></div>
    </div>
  )
}

export default HotelList