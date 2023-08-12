import React, { useContext, useEffect } from 'react'
import ListItem from './ListItem'
import { Store } from '../../store/StoreProvider'
import { getDistrictList, getHotelList } from '../../config/GetData'
import { observer } from 'mobx-react'

const HotelListShow = () => {

  //获取酒店数据
  const { hotelStore } = useContext(Store)

  //筛选条件
  const keyWords = hotelStore.filter.keyWords
  const districtId = hotelStore.filter.districtId

  useEffect(() => {
    //请求区域列表
    getDistrictList(hotelStore.currentCity.id)
    //请求酒店列表
    getHotelList(hotelStore.currentCity.id)
  }, [])

  //为图片设置懒加载
  var images = document.getElementsByTagName("img");

  const observer = new IntersectionObserver(callback);
  for (let i = 0; i < images.length; i++) {
    observer.observe(images[i]);
  }

  function callback(entries: any) {
    for (let i = 0; i < images.length; i++) {
      if (entries[i]?.isIntersecting) {
        let img = entries[i].target;
        let trueSrc = img.getAttribute("data-src");
        img.setAttribute("src", trueSrc);
        observer.unobserve(img);
      }
    }
  }

  return (
    <div>
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
  )
}

export default observer(HotelListShow)