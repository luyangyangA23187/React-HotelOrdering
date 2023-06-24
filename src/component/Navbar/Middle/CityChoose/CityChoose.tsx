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
    },[])

    //给城市列表分页
    const items = classification(hotelStore.cityList)

    //下拉菜单点击事件
    const onClick: MenuProps['onClick'] = ({ key }) => {
        //改变当前城市
        hotelStore.changeCurrentCity(parseInt(key))
      };

  return (
    <div>
        <div className={style.title}>
            城市
        </div>
        <Dropdown placement='bottomLeft' menu={{items,onClick}} arrow={false} getPopupContainer={(element)=>{
            element.className = element.className + ' '+ style.Dropdown
            return element
        }}>
            <div className={style.content}>
                {hotelStore.currentCity.shortName}
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
            cityMap.get(city.province)?.push({key:city.id,label:city.shortName})
        }
    })


    cityMap.forEach((value,key)=>{
        if(value.length){
            items.push({key:provinceMap.get(key)!,label:key,children:value})
        }
    })

    return items
}

export default observer(CityChoose)