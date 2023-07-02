import { Iorder, IregisterInfo } from "./interface"
import axios from "axios"
import hotelStore from "../store/HotelListStore"
import userStore from "../store/UserStore"
export {
    getCityList, getHotelList, getDistrictList, getHotelDetailById, postRegister,
    getEmailCode, checkLogin, getUserInfo, changeUserInfo, getRoomRestNum, postOrderItem,
    getUserOrder,cancelOrder
}


//请求城市列表
function getCityList(): void {
    //若已有城市列表则不发送请求
    if (hotelStore.cityList?.length) return
    //发送请求
    axios.get('/api/city/getCity').then((res) => {
        hotelStore.changeCityList(res.data.data)
    }).catch(err => console.log(err))
}

//根据城市ID请求酒店列表
function getHotelList(cityId: number): void {
    //发送请求
    axios.get(`/api/hotel/getHotelWithCity?cityId=${cityId}`).then((res) => {
        hotelStore.changeHotelList(res.data.data)
    }).catch(err => console.log(err))
}

//根据城市ID请求区域列表
function getDistrictList(cityId: number): void {
    //发送请求
    axios.get(`/api/city/getCityThree?cityId=${cityId}`).then((res) => {
        hotelStore.changeDistrictList(res.data.data)
    }).catch(err => console.log(err))
}

//根据酒店ID请求酒店详细信息
function getHotelDetailById(hotelId: number): void {
    //发送房间请求
    axios.get(`/api/room/getRoom?hotelId=${hotelId}`).then((res) => {
        hotelStore.changeRoomList(res.data.data)
    }).catch(err => console.log(err))
    //发送早餐请求
    axios.get(`/api/breakfast/getBreakfast?hotId=${hotelId}`).then((res) => {
        hotelStore.changeBreakfastList(res.data.data)
    }).catch(err => console.log(err))
}

//查看房间剩余量
function getRoomRestNum(roomId: number, reserveNum: number[][]) {
    return new Promise((resolve, reject) => {
        axios.get(`/api/restroom/selectRoom?roomId=${roomId}&month=${reserveNum[0][0]}
        &date=${reserveNum[0][1]}`).then(res0 => {
            let result = res0.data.data
            //考虑第二个请求
            if (reserveNum[1][0]) {
                axios.get(`/api/restroom/selectRoom?roomId=${roomId}&month=${reserveNum[1][0]}
                &date=${reserveNum[1][1]}`).then(res1 => {
                    if (res1.data.data < result) {
                        result = res1.data.data
                    }
                    resolve(result)
                }).catch(err => console.log(err))
            }
            else {
                resolve(result)
            }
        }).catch(err => console.log(err))
    })
}

//发送订单请求
function postOrderItem(order: Iorder) {
    axios.post('/api/alipay', { ...order }).then((res) => {
        const page = document.getElementById('payPage')!
        page.innerHTML = res.data
        page.getElementsByTagName('form')[0].submit()
    }).catch(err => console.log(err))
}

//发送注册信息
function postRegister(info: IregisterInfo) {
    return new Promise((resolve, reject) => {
        axios.post('api/user/register', { ...info }).then((res) => {
            switch (res.data.data) {
                case 0:
                    alert('注册成功')
                    resolve(res.data.data)
                    break
                case 1:
                    alert('此身份证号已被注册')
                    break
                case 2:
                    alert('此邮箱已被注册')
                    break
            }
        }).catch(err => console.log(err))
    })

}

//发送验证码
function getEmailCode(email: string) {
    axios.get(`/api/login/sendEmail?emailAddress=${email}`).then((res) => {
        switch (res.data) {
            case 0:
                alert('邮箱未注册')
                break
            case 1:
                alert('发送成功')
        }
    }).catch(err => console.log(err))
}

//登录验证
function checkLogin(emailAddress: string, code: string) {
    return new Promise((resolve, reject) => {
        axios.post('/api/login/checkEmailCode', { emailAddress, code }).then((res) => {
            if (!res.data.data) {
                reject()
                return
            }
            const id: number = res.data.data
            //改变id
            userStore.changeUserId(id)
            //得到用户信息
            getUserInfo()
            resolve(res.data.data)
        }).catch(err => console.log(err))
    })
}

//根据id得到用户信息
function getUserInfo() {
    const id: number = userStore.userInfo.useId
    //如果用户id为空则不发送
    if (!id) {
        alert('尚未登录')
        return
    }
    //发送请求
    axios.post('/api/user/getUser', { id: id }).then((res) => {
        userStore.changeUserInfo({ ...res.data.data, useId: id })
    }).catch(err => console.log(err))
}

//更改用户信息
function changeUserInfo(name: string, phone: string) {
    if (!name) {
        alert('姓名不能为空')
    }
    if (!phone) {
        alert('电话不能为空')
    }
    axios.post('/api/user/updateUser', { id: userStore.userInfo.useId, name: name, phone: phone }).then((res) => {
        userStore.changeUserInfo({ ...res.data.data, useId: userStore.userInfo.useId })
        alert('更改成功')
    }).catch(err => console.log(err))
}

//根据id得到订单信息
function getUserOrder() {
    axios.get(`/api/ordar/getOrderForUsers?useId=${userStore.userInfo.useId}`).then(res=>{
        userStore.changeUserOrderList(res.data.data)
    }).catch(err => console.log(err))
}

//根据id退单
function cancelOrder(id:number){
    return new Promise((resolve,reject)=>{
        axios.get(`/api/return?id=${id}`).then((res)=>{
            if(res.data.data == 1){
                resolve(res.data)
                return
            }
            reject()
        }).catch(err=>console.log(err))
    })
}