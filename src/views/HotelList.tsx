import React, { useContext, useEffect } from 'react'
import style from './HotelList.module.css'
import SelectMenu from '../component/HotelList/SelectMenu'
import ListItem from '../component/HotelList/ListItem'
import { getDistrictList, getHotelList } from '../config/GetData'
import { Store } from '../store/StoreProvider'
import { observer } from 'mobx-react'

const HotelList:React.FC = () => {

  //获取酒店数据
  const {hotelStore} = useContext(Store)

  //筛选条件
  const keyWords = hotelStore.filter.keyWords
  const districtId = hotelStore.filter.districtId

  useEffect(()=>{
    //请求区域列表
    getDistrictList(hotelStore.currentCity.id)
    //请求酒店列表
    getHotelList(hotelStore.currentCity.id)
  },[])

  return (
    <div className={style.box}>
        <div className={style.padding}></div>
        <div className={style.content}>
            <div className={style.SelectMenu}>
                <SelectMenu></SelectMenu>
            </div>
            <div className={style.list}>
                {hotelStore.hotelList.filter((hotel)=>{
                  if(districtId){
                    if(hotel.city.id != districtId) return false
                  }
                  if(keyWords){
                    if(hotel.name.indexOf(keyWords)==-1) return false
                  }
                  return true
                }
                ).map((hotel)=>
                  <ListItem hotel={hotel} key={hotel.id}></ListItem>
                )}
            </div>
        </div>
        <div className={style.padding}></div>
    </div>
  )
}

export default observer(HotelList)