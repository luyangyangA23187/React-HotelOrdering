import React from 'react'
import HotelList from '../views/HotelList'
import { useRoutes,Navigate } from 'react-router-dom'
import UserCenter from '../views/Login'
import Login from '../views/Login'

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