import React from 'react'
import CenterRight from '../component/Navbar/Right/CenterRight'
import { useRoutes } from 'react-router-dom'
import HomeButton from '../component/Navbar/Right/HomeButton'

interface Irouter{
    path:string,
    element:JSX.Element
}

const NavbarRightRouter = () => {
    const routerArray:Irouter[] = [
        {
            path:'/hotels',
            element:<CenterRight></CenterRight>
        },
        {
          path:'/login',
          element:<HomeButton></HomeButton>
        }
    ]

    const router = useRoutes(routerArray)
  return (
    router
  )
}

export default NavbarRightRouter