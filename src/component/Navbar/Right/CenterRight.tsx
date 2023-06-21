import React, { ReactNode, useContext } from 'react'
import { Store } from '../../../store/StoreProvider'
import LoginButton from './LoginButton'

const CenterRight = () => {

    const {userStore} = useContext(Store)


    //是否登录
    if(userStore.isLogin){
        
    }

    return (
        <div>
            <LoginButton></LoginButton>
        </div>
    )
}

export default CenterRight