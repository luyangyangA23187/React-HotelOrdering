import React from 'react'
import style from './Register.module.css'
import RegisterBar from '../component/Register/RegisterBar'

const Register = () => {
  return (
    <div className={style.box}>
      <div className={style.padding}></div>
        <div className={style.content}>
            <RegisterBar></RegisterBar>
        </div>
        <div className={style.padding}></div>
    </div>
  )
}

export default Register