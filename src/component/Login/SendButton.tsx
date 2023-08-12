import React,{useContext,useState} from 'react'
import { Store } from '../../store/StoreProvider';
import { Button } from 'antd'
import { getEmailCode } from '../../config/GetData';

const SendButton = () => {
    //获取用户登录信息
    const {userStore} = useContext(Store)
    //点击发送验证码后进行加载
    const [loading,setLoading] = useState<boolean>(false)
    //按钮内内容
    const [content,setContent] = useState<string>('发送验证码')

    //点击事件
    const handleClick=async()=>{
        const email:string = userStore.loginInfo.emailAddress
            if(!email){
              alert('邮箱为空')
              return
            }
            //发送邮件验证请求
            getEmailCode(email)
            //将按钮变灰
            setLoading(true)
            //将内容变为倒计时
            let num:number = 60
            let wait = ()=>new Promise(resolve=>{setTimeout(resolve,1000)})
            while(num){
                setContent('请'+num+'s后再试')
                await wait()
                num--
            }
            //恢复按钮
            setLoading(false)
            setContent('发送验证码')
    }

  return (
    <Button disabled={loading} onClick={handleClick}>
        {content}
    </Button>
  )
}

export default SendButton