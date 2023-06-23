import React from 'react'
import HotelList from '../views/HotelList'
import { useRoutes,Navigate } from 'react-router-dom'
import UserCenter from '../views/Login'
import Login from '../views/Login'
import Register from '../views/Register'

interface Irouter{
    path:string,
    element:JSX.Element
}

const IndexRouter = () => {
    const routerArray:Irouter[] = [
        {
            path:'/hotels',
            element:<HotelList></HotelList>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'*',
            element:<Navigate to='/hotels'></Navigate>
        }
    ]

    const router = useRoutes(routerArray)

  return (
    router
  )
}

export default IndexRouter