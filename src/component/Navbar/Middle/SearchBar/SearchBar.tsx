import React from 'react'
import style from './SearchBar.module.css'
import { Input } from 'antd'

function SearchBar() {

    const {Search} = Input
    const onSearch = (value: string) => console.log(value);

  return (
    <div>
        <div className={style.title}>
            搜索
        </div>
        <div className={style.content}>
            <div style={{'height':'8px'}}></div>
            <div>
                <Search placeholder="酒店名称、机场、火车站、及区域" onSearch={onSearch} enterButton size='large'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar