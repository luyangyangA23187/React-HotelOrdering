import React from 'react'
import style from './ListItem.module.css'
import { Row,Col,Button } from 'antd'

const ListItem = () => {
  return (
    <div className={style.box}>
        <Row gutter={8}>
            <Col span={8}>
            <div className={style.common}>
                图片
            </div>
            </Col>
            <Col span={10}>
            <div className={style.common}>
                <div className={style.hotelName}>小朴小住·设计师酒店</div>
                <div className={style.district}>双流区</div>
                <div className={style.address}>双流区航空港街道川大路二段二号四川大学江安校区</div>
            </div>
            </Col>
            <Col span={6}>
            <div className={style.common} style={{'borderLeft':"solid 2px","borderColor":"#dddddf"}}>
                <div className={style.price}>
                    <span style={{
                        "color":"#2681ff",
                        "fontSize":"40px"
                }}>299</span>起</div>
                <div className={style.button}>
                    <Button type={'primary'} size={'large'}>查看详情</Button>
                </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default ListItem