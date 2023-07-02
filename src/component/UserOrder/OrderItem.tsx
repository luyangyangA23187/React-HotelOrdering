import React, { useContext, useEffect } from 'react'
import {  Popconfirm, Table, message } from 'antd'
import { Store } from '../../store/StoreProvider'
import { observer } from 'mobx-react'
import { cancelOrder, getUserOrder } from '../../config/GetData'

const OrderItem = () => {

    useEffect(()=>{
        //请求订单列表
        getUserOrder()
    },[])
    

    //列表信息
    const {userStore} = useContext(Store)

    let data:any = []


    userStore.useOrderList.forEach(order=>{
        data.push({
            key:order.id,
            id:order.id,
            hotelName:order.hotelName,
            roomType:order.roomName,
            roomNum:order.roomNum,
            breakfast:order.breakfastName,
            checkin:order.checkin,
            checkout:order.checkout,
            price:order.price,
            state:order.state
        })
    })

    data.reverse()

    const cancel = (res:any)=>{
        if(res.state != "预订"){
            return (<div key={res.id}></div>)
        } 
        return(
            <Popconfirm title='确认退订' onConfirm={()=>{
                cancelOrder(res.id).then(()=>{
                    alert('退单成功')
                    getUserOrder()
                }).catch(()=>alert('退单失败'))
            }}
            description='是否确认退单？' okText='确认' cancelText='取消'>
                <span style={{'color':'#2681ff','cursor':'pointer'}}>退订</span>
            </Popconfirm>
        )
    }

    const columns = [
        {
            title: '订单号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '酒店',
            dataIndex: 'hotelName',
            key: 'hotelName',
        },
        {
            title: '房型',
            dataIndex: 'roomType',
            key: 'roomType',
        },
        {
            title: '房间数',
            dataIndex: 'roomNum',
            key: 'roomNum',
        },
        {
            title: '早餐',
            dataIndex: 'breakfast',
            key: 'breakfast',
        },
        {
            title: '入住日期',
            dataIndex: 'checkin',
            key: 'checkout',
        },
        {
            title: '离店日期',
            dataIndex: 'checkout',
            key: 'checkout',
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title:'退订',
            dataIndex:'td',
            key:'td',
            render:(text:any,record:any)=>cancel(record)
        }
    ];
    return (
        <div>
            <Table columns={columns} dataSource={data}></Table>
        </div>
    )
}

export default observer(OrderItem)