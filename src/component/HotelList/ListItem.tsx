import React, { ReactNode } from 'react'
import style from './ListItem.module.css'
import { Row,Col,Button } from 'antd'
import { Ihotel } from '../../config/interface'
import { useNavigate } from 'react-router-dom'

interface Iprops{
    hotel:Ihotel
    key:number|string
}

const ListItem:React.FC<Iprops> = (props) => {
    const navigate = useNavigate()

  return (
    <div className={style.box} key={props.hotel.id}>
        <Row gutter={8}>
            <Col span={8}>
            <div className={style.common}>
                <img src='' data-src={props.hotel.picture} alt="" />
            </div>
            </Col>
            <Col span={10}>
            <div className={style.common}>
                <div className={style.hotelName}>{props.hotel.name}</div>
                <div className={style.district}>{props.hotel.city.name}</div>
                <div className={style.address}>{props.hotel.address}</div>
            </div>
            </Col>
            <Col span={6}>
            <div className={style.common} style={{'borderLeft':"solid 2px","borderColor":"#dddddf"}}>
                <div className={style.price}>
                    <span style={{
                        "color":"#2681ff",
                        "fontSize":"40px"
                }}>{props.hotel.minPrice}</span>起</div>
                <div className={style.button}>
                    <Button type={'primary'} size={'large'}  onClick={
                        ()=>{navigate(`/hotels/details/${props.hotel.id}`)}}>查看详情</Button>
                </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default ListItem