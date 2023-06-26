import { makeAutoObservable,configure } from 'mobx'
import { createContext, useId } from 'react'
import { Ilogin, IregisterInfo, IuserInfo } from '../config/interface'

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

    //登录信息
    loginInfo:Ilogin = {
        emailAddress:'',
        code:'',
    }

    //用户信息
    userInfo:IuserInfo = {
        useId:0
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
    //改变登录信息-邮箱
    changeLoginEmail(email:string){
        this.loginInfo.emailAddress = email
    }
    //改变登录信息-验证码
    changeLoginEmailCode(emailCode:string){
        this.loginInfo.code = emailCode
    }
    //改变用户信息-id
    changeUserId(id:number){
        this.isLogin = true
        this.userInfo.useId = id
        sessionStorage.setItem('useId',id+'')
    }
    //退出登录
    exitLogin(){
        this.isLogin = false
        sessionStorage.removeItem('useId')
    }
}

const userStore = new UserStore()
const userContext = createContext<UserStore>(userStore)

export default userStore