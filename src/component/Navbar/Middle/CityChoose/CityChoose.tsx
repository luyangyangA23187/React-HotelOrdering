import React, { useEffect } from 'react'
import {Dropdown} from 'antd'
import {DownOutlined} from '@ant-design/icons'
import style from './CityChoose.module.css'
import type { MenuProps } from 'antd';
import { getCityList } from '../../../../config/GetData'
import { Icity } from '../../../../config/interface'
import axios from 'axios'
import { Store } from '../../../../store/StoreProvider';
import { useContext } from 'react';
import { observer } from 'mobx-react';

const CityChoose:React.FC = () => {

    const {hotelStore} = useContext(Store)

    useEffect(()=>{
        getCityList()
    })

    const items = classification(hotelStore.cityList)

  return (
    <div>
        <div className={style.title}>
            城市
        </div>
        <Dropdown placement='bottomLeft' menu={{items}} arrow={false}>
            <div className={style.content}>
                北京
                <DownOutlined></DownOutlined>
            </div>
        </Dropdown>
    </div>
  )
}

interface Iitem{
    key:number,
    label:string
}

function classification(list:Icity[]|undefined){
    const items: MenuProps['items'] = []
    if(!list){
        return undefined
    }
    let provinceMap = new Map<string,number>()
    let cityMap = new Map<string,Iitem[]>()
    //遍历列表找出省
    list.forEach((city)=>{
        //省/直辖市
        if(city.levelType === 1){
            provinceMap.set(city.name,city.id)
            cityMap.set(city.name,new Array<Iitem>())
        }
    })
    //遍历列表找出市级城市
    list.forEach((city)=>{
        //市级城市
        if(city.levelType === 2){
            cityMap.get(city.province)?.push({key:city.id,label:city.name})
        }
    })
    
    for(let key in cityMap.keys()){
        items.push({key:provinceMap.get(key),label:key,type:'group',children:cityMap.get(key)})
    }

    return items
}

export default observer(CityChoose)