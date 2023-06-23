import React from 'react'
import style from './LoginBar.module.css'
import { Button, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginBar = () => {
  //用于跳转到注册页面
  const navigate = useNavigate()
  return (
    <div className={style.box}>
      <div className={style.title}>
        登 录
      </div>
      <div className={style.email}>
        账号： 
        <Space.Compact size={'large'}>
          <Input placeholder='请输入邮箱'></Input>
          <Button>发送验证码</Button>
        </Space.Compact>
      </div>
      <div className={style.password}>
        验证码：
        <Input placeholder='请输入验证码' size={'large'}></Input>
      </div>
      <div>
        <div className={style.loginButton}>
          <Button size={'large'} type={'primary'}>登 录</Button>
        </div>
        <div className={style.registerButton} onClick={()=>{navigate('/register')}}>
           注册
        </div>
      </div>
    </div>
  )
}

export default LoginBar