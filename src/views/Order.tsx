import React, { useContext, useEffect, useId } from 'react'
import { Store } from '../store/StoreProvider'
import { observer } from 'mobx-react'
import { Iorder } from '../config/interface'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'


const Order = () => {

  const params = useParams()

  //汇总一下订单信息
  const {userStore,hotelStore} = useContext(Store)


  let orderItem:Iorder = {
    rooId:parseInt(params.rooId!),
    useId:1,
    breId:1,
    price:1,
    checkin:'1',
    checkout:'2',
  }


  return (
    <div>Order</div>
  )
}

export default observer(Order)