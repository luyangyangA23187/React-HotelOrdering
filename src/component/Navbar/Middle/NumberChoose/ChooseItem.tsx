import React, { useContext, useState } from 'react'
import Dropdown from 'antd/es/dropdown/dropdown'
import type { MenuProps } from 'antd';
import { Store } from '../../../../store/StoreProvider';
import ChooseListItem from './ChooseListItem';
import NumberSelectBar from './NumberSelectBar';
import { observer } from 'mobx-react';

const ChooseItem:React.FC = () => {

    //引入状态
    const {hotelStore} = useContext(Store)
    //
    const [open,setOpen] = useState(false)
    const handle:Function = ()=>{
        setOpen(!open)
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <div>
                <ChooseListItem>
                    <div>房间</div>
                    <NumberSelectBar num={hotelStore.roomNum} setNum={(n)=>hotelStore.changeRoomNum(n)}></NumberSelectBar>
                </ChooseListItem>
                <ChooseListItem>
                    <div>成人</div>
                    <NumberSelectBar num={hotelStore.adultNum} setNum={(n)=>hotelStore.changeAdultNum(n)}></NumberSelectBar>
                </ChooseListItem>
                <ChooseListItem>
                    <div>儿童</div>
                    <NumberSelectBar num={hotelStore.childNum} setNum={(n)=>hotelStore.changeChildNum(n)}></NumberSelectBar>
                </ChooseListItem>
            </div>
          ),
        },
    ]

  return (
    <div>
        <Dropdown menu={{items}} trigger={['click']} >
            <div >
                {hotelStore.adultNum + hotelStore.childNum}人,
                {hotelStore.roomNum}间
            </div> 
        </Dropdown>
    </div>
  )
}

export default observer(ChooseItem)