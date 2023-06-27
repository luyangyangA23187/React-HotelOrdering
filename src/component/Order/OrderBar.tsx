import React from 'react'
import style from './OrderBar.module.css'

interface Iprops{
    info:{
        hotelName:string,
        roomName:string,
        breakfast:string,
        roomNum:number,
        checkIn:string,
        checkOut:string,
        price:number,
        userName:string,
        phone:string,
    }
}

const OrderBar:React.FC<Iprops> = (props) => {
  return (
    <div className={style.box}>
        <div className={style.title}>订 单 信 息</div>
        <div className={style.contentBar}>
            酒店:{props.info.hotelName}
        </div>
        <div className={style.contentBar}>
            房型：{props.info.roomName}
        </div>
        <div className={style.contentBar}>
            早餐：{props.info.breakfast}
        </div>
        <div className={style.contentBar}>
            房间数:{props.info.roomNum}
        </div>
        <div className={style.contentBar}>
            入住时间:{props.info.checkIn}
        </div>
        <div className={style.contentBar}>
            离店时间:{props.info.checkOut}
        </div>
        <div className={style.contentBar}>
            单间价格:{props.info.price}
        </div>
        <div className={style.contentBar}>
            用户姓名:{props.info.userName}
        </div>
        <div className={style.contentBar}>
            联系方式:{props.info.phone}
        </div>

    </div>
  )
}

export default OrderBar