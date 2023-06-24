import { makeAutoObservable,configure } from 'mobx'
import { createContext } from 'react'

interface IregisterInfo{
    name:string,
    email:string,
    phone:string,
    sexual:string,
    uid:string,
}

class UserStore{
    constructor(){
        makeAutoObservable(this)
    }

    //是否登录
    isLogin:boolean = false

    //注册信息
    registerInfo:IregisterInfo = {
        name:'',
        email:'',
        phone:'',
        sexual:'',
        uid:'',
    }

    //改变注册信息-姓名
    changeRegisterInfoName(name:string){
        this.registerInfo.name = name
    }
    //改变注册信息-邮箱
    changeRegisterInfoEmail(email:string){
        this.registerInfo.email = email
    }
    //改变注册信息-手机号
    changeRegisterInfoPhone(phone:string){
        this.registerInfo.phone = phone
    }
    //改变注册信息-性别
    changeRegisterInfoSexual(sexual:string){
        this.registerInfo.sexual = sexual
    }
    //改变注册信息-身份证号
    changeRegisterInfoUid(uid:string){
        this.registerInfo.uid = uid
    }
}

const userStore = new UserStore()
const userContext = createContext<UserStore>(userStore)

export default userStore