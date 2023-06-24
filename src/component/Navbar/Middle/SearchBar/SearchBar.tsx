import React, { useContext } from 'react'
import style from './SearchBar.module.css'
import { Input } from 'antd'
import { Store } from '../../../../store/StoreProvider';

function SearchBar() {

    //得到搜索框的值
    const {Search} = Input
    //点击搜索时的事件
    const onSearch = (value: string) =>{
        hotelStore.changeFilterKeyWords(value)
    }

    //得到状态
    const {hotelStore} = useContext(Store)

  return (
    <div>
        <div className={style.title}>
            搜索
        </div>
        <div className={style.content}>
            <div style={{'height':'8px'}}></div>
            <div>
                <Search placeholder="酒店名称" onSearch={onSearch} enterButton size='large'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar