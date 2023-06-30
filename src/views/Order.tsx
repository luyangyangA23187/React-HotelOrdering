import React, { useContext, useEffect, useId } from 'react'
import { Store } from '../store/StoreProvider'
import { observer } from 'mobx-react'
import { Ibreakfast, Ihotel, Iorder, Iroom, IuserInfo } from '../config/interface'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import OrderBar from '../component/Order/OrderBar'
import { Button } from 'antd'
import { postOrderItem } from '../config/GetData'


const Order = () => {

  const params = useParams()


  //汇总一下订单信息
  const {userStore,hotelStore} = useContext(Store)
  const userinfo:IuserInfo = userStore.userInfo
  const hotel:Ihotel = hotelStore.getHotelById(parseInt(params.id!))
  const room:Iroom = hotelStore.getRoomById(parseInt(params.rooId!))
  const breakfast:Ibreakfast = hotelStore.getBreakfastById(parseInt(params.breId!))


  let orderItem:Iorder = {
    rooId:room.id,
    roomNum:hotelStore.roomNum,
    useId:parseInt(sessionStorage.getItem('useId')!),
    breId:breakfast.id,
    checkin:hotelStore.getFormalTime(0),
    checkout:hotelStore.getFormalTime(1),
    price:(room.price + breakfast.price)*hotelStore.roomNum,
  }

  console.log(orderItem)


  orderItem.price = parseFloat(Number(orderItem.price*(dayjs(orderItem.checkout).
  diff(orderItem.checkin,'day'))).toFixed(2))
  const totalPrice:number = orderItem.price

  return (
    <div>
      <OrderBar info={{
        hotelName:hotel.name,
        roomName:room.type,
        roomNum:hotelStore.roomNum,
        breakfast:breakfast.type,
        checkIn:orderItem.checkin,
        checkOut:orderItem.checkout,
        price:room.price + breakfast.price,
        userName:userinfo.name,
        phone:userinfo.phone
        }}></OrderBar>
        <div style={{'fontSize':'large','textAlign':'center'}}>
          总价:{totalPrice}
        </div>
        <div style={{'textAlign':'center','marginTop':'20px'}}>
          <Button size={'large'} type={'primary'}
          onClick={()=>{(postOrderItem(orderItem))}}>支付</Button>
        </div>
        <div id='payPage'>

        </div>
    </div>
  )
}

export default Order