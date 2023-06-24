import { title } from 'process'
import React, { useContext } from 'react'
import style from './SelectMenu.module.css'
import { observer } from 'mobx-react'
import { Store } from '../../store/StoreProvider'
import SelectItem from './SelectItem'

const SelectMenu:React.FC = () => {

  //得到区域列表
  const {hotelStore} = useContext(Store)


  return (
    <div className={style.box}>
      <div className={style.title}>
        位置区域
      </div>
      <div className={style.content}>
        {hotelStore.disstrictList.map((item)=>(
          <SelectItem districtId={item.id} name={item.name} key={item.id}></SelectItem>
        ))}
      </div>
      <div style={{'clear':'both'}}></div>
    </div>
  )
}

export default observer(SelectMenu)