import React from 'react'
import style from './Navbar.module.css'
import Middle from '../component/Navbar/Middle'
import NavbarRightRouter from '../routers/NavbarRightRouter'

export const Navbar:React.FC = () => {
  return (
    <div className={style.NavbarBox}>
      <div className={style.left}>
        酒店订购
      </div>
      <div  className={style.middle}>
        <Middle></Middle>
      </div>
      <div className={style.right}>
        <NavbarRightRouter></NavbarRightRouter>
      </div>
    </div>
  )
}

