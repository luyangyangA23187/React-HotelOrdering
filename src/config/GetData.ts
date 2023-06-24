import axios from "axios"
import hotelStore from "../store/HotelListStore"
export {getCityList,getHotelList,getDistrictList}

//请求城市列表
function getCityList():void{
    //若已有城市列表则不发送请求
    if(hotelStore.cityList?.length) return
    //发送请求
    axios.get('/api/city/getCity').then((res)=>{
        hotelStore.changeCityList(res.data.data)
    }).catch(err=>console.log(err))
}

//根据城市ID请求酒店列表
function getHotelList(cityId:number):void{
    //发送请求
    axios.get(`/api/hotel/getHotelWithCity?cityId=${cityId}`).then((res)=>{
        hotelStore.changeHotelList(res.data.data)
    }).catch(err=>console.log(err))
}

//根据城市ID请求区域列表
function getDistrictList(cityId:number):void{
    //发送请求
    axios.get(`/api/city/getCityThree?cityId=${cityId}`).then((res)=>{
        hotelStore.changeDistrictList(res.data.data)
    }).catch(err=>console.log(err))
}