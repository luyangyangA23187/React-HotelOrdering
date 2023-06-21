import React from 'react'
import style from './Login.module.css'
import LoginBar from '../component/Login/LoginBar'

const Login = () => {
  return (
    <div className={style.box}>
      <div className={style.padding}></div>
        <div className={style.content}>
            <LoginBar></LoginBar>
        </div>
        <div className={style.padding}></div>
    </div>
  )
}

export default Login