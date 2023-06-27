import { Ilogin, IregisterInfo } from "./interface"
import axios from "axios"
import hotelStore from "../store/HotelListStore"
import userStore from "../store/UserStore"
import { useNavigate } from "react-router-dom"
import { userInfo } from "os"
export {getCityList,getHotelList,getDistrictList,getHotelDetailById,postRegister,
getEmailCode,checkLogin,getUserInfo}


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
    //发送房间请求
    axios.get(`/api/room/getRoom?hotelId=${hotelId}`).then((res)=>{
        hotelStore.changeRoomList(res.data.data)
    }).catch(err=>console.log(err))
    //发送早餐请求
    axios.get(`/api/breakfast/getBreakfast?hotId=${hotelId}`).then((res)=>{
        hotelStore.changeBreakfastList(res.data.data)
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

//发送验证码
function getEmailCode(email:string){
    axios.get(`/api/login/sendEmail?emailAddress=${email}`).then((res)=>{
        switch(res.data){
            case 0:
                alert('邮箱未注册')
                break
            case 1:
                alert('发送成功')
        }
    }).catch(err=>console.log(err))
}

//登录验证
function checkLogin(emailAddress:string,code:string){
    return new Promise((resolve,reject)=>{
        axios.post('/api/login/checkEmailCode',{emailAddress,code}).then((res)=>{
            if(!res.data.data){
                reject()
            }
            const id:number = res.data.data
            //改变id
            userStore.changeUserId(id)
            //得到用户信息
            getUserInfo()
            resolve(res.data.data)
        }).catch(err=>console.log(err))
    })
}

//根据id得到用户信息
function getUserInfo(){
    const id:number = userStore.userInfo.useId
    //如果用户id为空则不发送
    if(!id){
        alert('尚未登录')
        return
    }
    //发送请求
    axios.post('/api/user/getUser',{id:id}).then((res)=>{
        userStore.changeUserInfo({...res.data.data,useId:id})
    }).catch(err=>console.log(err))
}