import React, { Children, ReactNode } from 'react'
import HotelList from '../views/HotelList'
import { useRoutes,Navigate } from 'react-router-dom'
import Login from '../views/Login'
import Register from '../views/Register'
import HotelDetail from '../views/HotelDetail'
import Order from '../views/Order'
import userStore from '../store/UserStore'
import { message } from 'antd'
import UserInfo from '../views/UserInfo'
import UserOrder from '../views/UserOrder'

interface Irouter{
    path:string,
    element:JSX.Element
    children?:Irouter[]
}

const IndexRouter = () => {

    const routerArray:Irouter[] = [
        {
            path:'/hotels',
            element:lazyLoad('HotelList'),//酒店列表
        },
        {
            path:'/hotels/details/:id',
            element:lazyLoad('HotelDetail')//酒店详情
        },
        {
            path:'/hotels/details/:id/:rooId/:breId/order',
            element:<Auth>{lazyLoad('Order')}</Auth>//订单页面
        },
        {
            path:'/login',
            element:lazyLoad('Login')//登录页面
        },
        {
            path:'/register',
            element:lazyLoad('Register')//注册页面
        },
        {
            path:'/center/userinfo',
            element:<Auth>{lazyLoad('UserInfo')}</Auth>//用户个人信息页面
        },
        {
            path:'/center/userorder',
            element:<Auth>{lazyLoad('UserOrder')}</Auth>//用户订单页面
        },
        {
            path:'*',
            element:<Navigate to='/hotels'></Navigate>//重定向至酒店列表
        }
    ]

    const router = useRoutes(routerArray)

  return (
    router
  )
}


//用于路由拦截
const Auth:React.FC<{children:ReactNode|ReactNode[]}> = (props)=>{

    if(!userStore.isLogin){
        message.info('此页面需要登录才可访问')
        return <Navigate to='/login'></Navigate>
    }

    return (
        <div>
            {props.children}
        </div>
    )
}

//路由懒加载
const lazyLoad = (path:string)=>{
    const Comp = React.lazy(()=>import(`../views/${path}`))
    return <React.Suspense>
        <Comp></Comp>
    </React.Suspense>
}

export default IndexRouter