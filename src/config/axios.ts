import axios from "axios"
import userStore from "../store/UserStore"

let instance = axios.create({
    timeout:5000
})

//需要拦截的请求
const InterceptRequest = ['/user','/ordar']

function checkInterceptRequest(url:string|undefined){
    if(!url) return false
    //如果拦截列表中包含则返回真
    for(let i=0;i<InterceptRequest.length;i++){
        if(url.includes(InterceptRequest[i])) return true
    }

    return false
}

//请求拦截
instance.interceptors.request.use(config=>{

    //是否在拦截列表中
    if(checkInterceptRequest(config.url)){
        //带上token
        const token = localStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
},err=>{
    alert('请求失败')
    console.log(err)
})

//响应拦截
instance.interceptors.response.use(res=>{
    //拿到token
    const {authorization} = res.headers
    //如果不为空则保存token
    authorization && userStore.successLogin(authorization)
    return res
},err=>{
    let status = err.response.status
    switch(status){
        case 401:
            //清空登录状态
            userStore.exitLogin()
            break
    }
})

export default instance