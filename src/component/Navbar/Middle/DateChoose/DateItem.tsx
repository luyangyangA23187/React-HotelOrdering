import React, { useContext, useState } from 'react'
import style from './DateItem.module.css'
import { Dropdown,Calendar } from 'antd'
import type { MenuProps } from 'antd';
import { Store } from '../../../../store/StoreProvider';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs'
import { observer } from 'mobx-react';

dayjs.locale('zh-cn');


interface Idate{
    year:number,
    month:number,
    day:number,
}

interface Iprops{
    show:any;
    date:Idate
    index:number
}


const DateItem:React.FC<Iprops> = (props) => {
    //获取日期
    const {hotelStore} = useContext(Store)
    //下拉菜单
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <div className={style.Calendar}>
                {/* 日历展示 */}
                <Calendar fullscreen={false} onSelect={(date, { source }) => {
                if (source === 'date') {
                    //修改日期
                    const year:number = date.year()
                    const month:number = date.month() +1 
                    const day:number = date.date()
                    hotelStore.changeDate(props.index,{year,month,day})
                    //关闭下拉菜单
                    hotelStore.calendarShow(0,false)
                    hotelStore.calendarShow(1,false)
                    }
            }} />
            </div>
          ),
        },
    ]

    //控制日历展示,返回值为boolean
    const getOpen:Function = ():boolean=>{
      switch(props.index){
        case 0:
          return hotelStore.calendarShow_0
        case 1:
          return hotelStore.calendarShow_1
      }
      return false
    }
    //控制下划线
    const activeStyle:React.CSSProperties = {
      'borderColor':'#2681ff',
      'borderBottomStyle':'solid'
    }

    function getStyle():React.CSSProperties|undefined{
      if(getOpen()){
        return activeStyle
      }
      return
    }

    //点击事件，改变日历状态
    const handleClick:Function = ():void=>{
      switch(props.index){
        case 0:
          //点击后自身的展示情况取反
          hotelStore.calendarShow(0,!hotelStore.calendarShow_0)
          //另一个隐藏
          hotelStore.calendarShow(1,false)
          break
        case 1:
          //点击后自身的展示情况取反
          hotelStore.calendarShow(1,!hotelStore.calendarShow_1)
          //另一个隐藏
          hotelStore.calendarShow(0,false)
          break
      }
    }

  return (
    <div className={style.box} style={getStyle()}>
        {/* 下拉菜单，open用于控制下拉菜单展示 */}
        <Dropdown menu={{items}} trigger={['click']} placement={props.show} open={getOpen()}>
            <div onClick={()=>{handleClick()}}>
                {props.date.year}年{props.date.month}月{props.date.day}日
            </div>
        </Dropdown>
    </div>
  )
}

export default observer(DateItem)