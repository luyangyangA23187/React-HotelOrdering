import React, { Children, ReactNode } from 'react'
import HotelList from '../views/HotelList'
import { useRoutes,Navigate } from 'react-router-dom'
import UserCenter from '../views/Login'
import Login from '../views/Login'
import Register from '../views/Register'
import HotelDetail from '../views/HotelDetail'
import Order from '../views/Order'
import userStore from '../store/UserStore'
import { message } from 'antd'

interface Irouter{
    path:string,
    element:JSX.Element
    children?:Irouter[]
}

const IndexRouter = () => {

    const routerArray:Irouter[] = [
        {
            path:'/hotels',
            element:<HotelList></HotelList>,//酒店列表
        },
        {
            path:'/hotels/details/:id',
            element:<HotelDetail></HotelDetail>//酒店详情
        },
        {
            path:'/hotels/details/:id/:rooId/order',
            element:<Auth><Order></Order></Auth>
        },
        {
            path:'/login',
            element:<Login></Login>//登录页面
        },
        {
            path:'/register',
            element:<Register></Register>//注册页面
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

export default IndexRouter