import React, { useContext, useEffect, useState } from 'react'
import { IuserInfo } from '../config/interface'
import { Store } from '../store/StoreProvider'
import style from './UserInfo.module.css'
import { Button, Input } from 'antd'
import { changeUserInfo, getUserInfo } from '../config/GetData'
import { observer } from 'mobx-react'

const UserInfo = () => {

    const {userStore} = useContext(Store)

    const info:IuserInfo = userStore.userInfo

    const [name,setName] = useState<string>(info.name)
    const [phone,setPhone] = useState<string>(info.phone)

    useEffect(()=>{
        getUserInfo()
    },[])

  return (
    <div className={style.box}>
        <div className={style.title}>
            个 人 信 息
        </div>
        <div className={style.contentBar}>
            姓名:
            <div style={{'display':'inline-block'}}>
            <Input value={name}
            onChange={e=>setName(e.target.value)}></Input>
            </div>   
        </div>
        <div className={style.contentBar}>
            身份证号:{info.uid}
        </div>
        <div className={style.contentBar}>
            手机号:
            <div style={{'display':'inline-block'}}>
            <Input value={phone}
            onChange={e=>setPhone(e.target.value)}></Input>
            </div> 
        </div>
        <div className={style.contentBar}>
            性别:{info.sexual}
        </div>
        <div className={style.contentBar}>
            邮箱:{info.email}
        </div>
        <div className={style.button}>
            <Button size={'large'} type={'primary'} 
            onClick={()=>changeUserInfo(name,phone)}>确认更改</Button>
        </div>
    </div>
  )
}

export default observer(UserInfo)