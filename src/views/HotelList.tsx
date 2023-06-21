import React from 'react'
import style from './HotelList.module.css'
import SelectMenu from '../component/HotelList/SelectMenu'
import ListItem from '../component/HotelList/ListItem'

const HotelList:React.FC = () => {
  return (
    <div className={style.box}>
        <div className={style.padding}></div>
        <div className={style.content}>
            <div className={style.SelectMenu}>
                <SelectMenu></SelectMenu>
            </div>
            <div className={style.list}>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </div>
        </div>
        <div className={style.padding}></div>
    </div>
  )
}

export default HotelList