import React, { useContext } from 'react'
import style from './LoginBar.module.css'
import { Button, Input, Space } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../../store/StoreProvider';
import { checkLogin, getEmailCode } from '../../config/GetData';

const LoginBar = () => {

  //获取用户登录信息
  const {userStore} = useContext(Store)

  //用于跳转到注册页面或首页
  const navigate = useNavigate()
  //用于检查当前网页
  const location = useLocation()

  if(userStore.isLogin){
    navigate(-1)
  }

  return (
    <div className={style.box}>
      <div className={style.title}>
        登 录
      </div>
      <div className={style.email}>
        账号： 
        <Space.Compact size={'large'}>
          <Input placeholder='请输入邮箱'
          onChange={(e)=>{userStore.changeLoginEmail(e.target.value)}}></Input>
          <Button onClick={()=>{
            const email:string = userStore.loginInfo.emailAddress
            if(!email){
              alert('邮箱为空')
              return
            }
            //发送邮件验证请求
            getEmailCode(email)
          }}>发送验证码</Button>
        </Space.Compact>
      </div>
      <div className={style.password}>
        验证码：
        <Input placeholder='请输入验证码' size={'large'}
        onChange={(e)=>{userStore.changeLoginEmailCode(e.target.value)}}></Input>
      </div>
      <div>
        <div className={style.loginButton}>
          <Button size={'large'} type={'primary'}
          onClick={()=>{
            const emailAddress:string = userStore.loginInfo.emailAddress
            const code:string = userStore.loginInfo.code
            if(!emailAddress){
              alert('邮箱为空')
              return
            }
            if(!code){
              alert('验证码为空')
              return
            }
            //发送登录验证请求
            checkLogin(emailAddress,code).then((res)=>{
              alert('登录成功')
              navigate(-1)
              //跳转页面
            }).catch(()=>{
              alert('登陆失败')
            })
          }}>登 录</Button>
        </div>
        <div className={style.registerButton} onClick={()=>{navigate('/register')}}>
           注册
        </div>
      </div>
    </div>
  )
}

export default LoginBar