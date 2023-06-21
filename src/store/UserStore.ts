import { makeAutoObservable,configure } from 'mobx'
import { createContext } from 'react'

class UserStore{
    constructor(){
        makeAutoObservable(this)
    }

    isLogin:boolean = false
}

const userStore = new UserStore()
const userContext = createContext<UserStore>(userStore)

export default userStore