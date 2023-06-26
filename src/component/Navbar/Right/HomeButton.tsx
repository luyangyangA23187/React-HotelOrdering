import React, { useContext } from 'react'
import { Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../../store/StoreProvider'
import UserButton from './UserButton'
import { observer } from 'mobx-react'

const HomeButton = () => {

    const navigate = useNavigate()

    const {userStore} = useContext(Store)

  return (
    <div>
      <div style={{'lineHeight':'100px','marginLeft':'15px','display':'inline-block'}}>
        <Button icon={<HomeOutlined></HomeOutlined>} type={'primary'} onClick={()=>{navigate('/hotels')}}>
            首页
        </Button>
      </div>
      <div style={{'display':'inline-block'}}>
      {userStore.isLogin && <UserButton></UserButton>}
      </div>
    </div>
    
  )
}

export default observer(HomeButton)