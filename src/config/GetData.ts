import axios from "axios"
import hotelStore from "../store/HotelListStore"
export {getCityList}

//请求城市列表
function getCityList():void{
    axios.get('/api/areas/getCity').then((res)=>{
        hotelStore.changeCityList(res.data.data)
    }).catch(err=>console.log(err))
}