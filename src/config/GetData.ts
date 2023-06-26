import { IregisterInfo } from "./interface"
import axios from "axios"
import hotelStore from "../store/HotelListStore"
export {getCityList,getHotelList,getDistrictList,getHotelDetailById,postRegister}


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

//根据酒店ID请求酒店详细信息
function getHotelDetailById(hotelId:number):void{
    //发送请求
    axios.get(`/api/room/getRoom?hotelId=${hotelId}`).then((res)=>{
        hotelStore.changeRoomList(res.data.data)
    }).catch(err=>console.log(err))
}

//发送注册信息
function postRegister(info:IregisterInfo){
    axios.post('api/user/register',{...info}).then((res)=>{
        switch(res.data.data){
            case 0:
                alert('注册成功')
                break
            case 1:
                alert('此身份证号已被注册')
                break
            case 2:
                alert('此邮箱已被注册')
                break
        }
    }).catch(err=>console.log(err))
}