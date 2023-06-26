import React, { ReactNode, useContext } from 'react'
import { Store } from '../../../store/StoreProvider'
import LoginButton from './LoginButton'
import UserButton from './UserButton'
import { observer } from 'mobx-react'

const CenterRight = () => {

    const {userStore} = useContext(Store)


    //是否登录
    if(userStore.isLogin){
        return (
            <div>
                <UserButton></UserButton>
            </div>
        )
    }

    return (
        <div>
            <LoginButton></LoginButton>
        </div>
    )
}

export default observer(CenterRight)