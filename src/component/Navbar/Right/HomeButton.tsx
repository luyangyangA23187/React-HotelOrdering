import React from 'react'
import { Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const HomeButton = () => {

    const navigate = useNavigate()

  return (
    <div style={{'lineHeight':'100px','marginLeft':'15px'}}>
        <Button icon={<HomeOutlined></HomeOutlined>} type={'primary'} onClick={()=>{navigate('/hotels')}}>
            首页
        </Button>
    </div>
  )
}

export default HomeButton