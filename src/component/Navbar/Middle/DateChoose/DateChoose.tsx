import React, { useContext, useEffect } from 'react'
import style from './DateChoose.module.css'
import { Row,Col } from 'antd'
import DateItem from './DateItem'
import { Store } from '../../../../store/StoreProvider'
import { observer } from 'mobx-react';
import dayjs from 'dayjs'

const DateChoose:React.FC = () => {

  const {hotelStore} = useContext(Store)

  useEffect(()=>{
    //获取当天日期
    let dayJs = dayjs()
    hotelStore.changeDate(0,{year:dayJs.year(),month:dayJs.month()+1,day:dayJs.date()})
    //获取次日日期
    dayJs = dayjs().add(1,'day')
    hotelStore.changeDate(1,{year:dayJs.year(),month:dayJs.month()+1,day:dayJs.date()})
  },[])

  return (
    <div>
        <div className={style.title}>
            日期
        </div>
        <div className={style.content}>
          <Row>
            <Col span={10}>
              <DateItem show='bottomLeft' date={hotelStore.date_0} index={0}></DateItem>
            </Col>
            <Col span={4}>
              <div style={{'textAlign':'center','lineHeight':'50px'}}>——</div>
            </Col>
            <Col span={10}>
              <DateItem show='bottomRight' date={hotelStore.date_1} index={1}></DateItem>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default observer(DateChoose)