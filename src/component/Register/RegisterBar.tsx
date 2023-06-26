import React, { useContext } from 'react'
import style from './RegisterBar.module.css'
import { Button, Input, Space, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Store } from '../../store/StoreProvider';
import { postRegister } from '../../config/GetData';
import { IregisterInfo } from '../../config/interface';

const RegisterBar = () => {

  //性别
  const onGenderChange = (e: RadioChangeEvent) => {
    userStore.changeRegisterInfoSexual(e.target.value)
  }
  //得到用户注册信息状态
  const {userStore} = useContext(Store)

  return (
    <div className={style.box}>
      <div className={style.title}>
        注 册
      </div>
      <div className={style.name}>
        姓名:
        <Input placeholder='请输入姓名' size={'large'} 
        onChange={e=>userStore.changeRegisterInfoName(e.target.value)}></Input>
      </div>
      <div className={style.personId}>
        身份证号:
        <Input placeholder='请输入身份证号' size={'large'}
        onChange={e=>userStore.changeRegisterInfoUid(e.target.value)}></Input>
      </div>
      <div className={style.phoneNumber}>
        手机号:
        <Input placeholder='请输入手机号' size={'large'}
        onChange={e=>userStore.changeRegisterInfoPhone(e.target.value)}></Input>
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
        <Input placeholder='请输入邮箱' size={'large'} type={'primary'}
        onChange={e=>userStore.changeRegisterInfoEmail(e.target.value)}></Input>
      </div>
      <div>
        <div className={style.registerButton}>
          <Button size={'large'} type={'primary'} onClick={()=>{
            if(checkRegisterInfo(userStore.registerInfo)){
              postRegister(userStore.registerInfo)
            }
          }}>注 册</Button>
        </div>
      </div>
    </div>
  )
}

//检查注册信息是否合法并发送
function checkRegisterInfo(info:IregisterInfo):boolean{
  if(!info.name){
    alert('姓名为空')
    return false
  }
  if(!info.uid){
    alert('未输入身份证号')
    return false
  }
  if(!info.phone){
    alert('手机号为空')
    return false
  }
  if(!info.sexual){
    alert('未选择性别')
    return false
  }
  if(!info.email){
    alert('邮箱为空')
    return false
  }
  return true
}

export default RegisterBar