import React from 'react'
import style from './RegisterBar.module.css'
import { Button, Input, Space, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';

const RegisterBar = () => {

  //性别
  const onGenderChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)}

  return (
    <div className={style.box}>
      <div className={style.title}>
        注 册
      </div>
      <div className={style.name}>
        姓名:
        <Input placeholder='请输入姓名' size={'large'}></Input>
      </div>
      <div className={style.personId}>
        身份证号:
        <Input placeholder='请输入身份证号' size={'large'}></Input>
      </div>
      <div className={style.phoneNumber}>
        手机号:
        <Input placeholder='请输入手机号' size={'large'}></Input>
      </div>
      <div className={style.gender}>
        性别：
        <Radio.Group onChange={onGenderChange}>
          <Radio value={'男'}>男</Radio>
          <Radio value={'女'}>女</Radio>
        </Radio.Group>
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
        <div className={style.registerButton}>
          <Button size={'large'} type={'primary'}>注 册</Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterBar