import axios from "axios"
import hotelStore from "../store/HotelListStore"
export {getCityList}

//请求城市列表
function getCityList():void{
    //若已有城市列表则不发送请求
    if(hotelStore.cityList?.length) return
    //发送请求
    axios.get('/api/city/getCity').then((res)=>{
        hotelStore.changeCityList(res.data.data)
    }).catch(err=>console.log(err))
}