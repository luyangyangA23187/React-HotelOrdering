import React from 'react'
import { Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const LoginButton = () => {

    const navigate = useNavigate()

  return (
    <div style={{'marginLeft':'15px','lineHeight':'100px'}}>
        <Button icon={<UserOutlined></UserOutlined>} type={'primary'} onClick={()=>{navigate('/login')}}>
            登录
        </Button>
    </div>
  )
}

export default LoginButton