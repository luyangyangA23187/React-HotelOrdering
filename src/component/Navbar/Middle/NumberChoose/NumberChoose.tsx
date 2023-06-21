import React from 'react'
import style from './NumberChoose.module.css'
import ChooseItem from './ChooseItem'

const NumberChoose = () => {
  return (
    <div>
        <div className={style.title}>
            房间及入住人数
        </div>
        <div className={style.content}>
            <ChooseItem></ChooseItem>
        </div>
    </div>
  )
}

export default NumberChoose