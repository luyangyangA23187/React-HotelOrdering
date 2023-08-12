import { makeAutoObservable } from 'mobx'
import { createContext, useId } from 'react'
import { IOrderShow, Ilogin, IregisterInfo, IuserInfo } from '../config/interface'
import { getUserInfo } from '../config/GetData'

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
        email:'',
        name:'',
        phone:'',
        sexual:'',
        uid:'',
    }

    //用户订单列表
    useOrderList:IOrderShow[] = []

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
        sessionStorage.setItem('useId',id+'')
    }
    //检查是否已经登录
    checkLogin(){
        if(localStorage.getItem('token')){
            //发送得到用户信息的请求以此来确认是否登录
            getUserInfo()
        }
    }
    //改变用户信息
    changeUserInfo(userInfo:IuserInfo){
        this.userInfo = userInfo
    }
    //改变订单列表
    changeUserOrderList(list:IOrderShow[]){
        this.useOrderList = list
    }
    //成功登录
    successLogin(token:string){
        //登录状态为真
        if(!this.isLogin) this.isLogin = true
        //设置token
        localStorage.setItem('token',token)
    }
    //退出登录
    exitLogin(){
        //登录状态为假
        this.isLogin = false
        //清空token
        localStorage.removeItem('token')
        //清空登录信息
        this.loginInfo.emailAddress = ''
        this.loginInfo.code = ''
    }
}

const userStore = new UserStore()
const userContext = createContext<UserStore>(userStore)

export default userStore