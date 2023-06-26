import React from 'react'
import HotelList from '../views/HotelList'
import { useRoutes,Navigate } from 'react-router-dom'
import UserCenter from '../views/Login'
import Login from '../views/Login'
import Register from '../views/Register'
import HotelDetail from '../views/HotelDetail'

interface Irouter{
    path:string,
    element:JSX.Element
    children?:Irouter[]
}

const IndexRouter = () => {
    const routerArray:Irouter[] = [
        {
            path:'/hotels',
            element:<HotelList></HotelList>,
        },
        {
            path:'/hotels/details/:id',
            element:<HotelDetail></HotelDetail>
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