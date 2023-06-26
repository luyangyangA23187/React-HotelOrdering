import React from 'react'
import {Row,Col} from 'antd'
import style from './HotelDetailCard.module.css'
import { Ihotel } from '../../config/interface'

const HotelDetailCard:React.FC<{hotel:Ihotel}> = (props) => {
  return (
    <div className={style.box}>
      <Row>
        <Col span={8}>
          <div className={style.image}>
            <img src={props.hotel.picture} style={{'width':'100%','objectFit':'fill'}}></img>
          </div>
        </Col>
        <Col span={10}>
          <div className={style.middleContent}>
            <div className={style.hotelName}>
                {props.hotel.name}
            </div>
            <div className={style.district}>
                <span style={{'fontWeight':'bold'}}>区域位置</span>:{props.hotel.city.cityName}
                {' '}{props.hotel.city.name}
            </div>
            <div className={style.address}>
                <span style={{'fontWeight':'bold'}}>具体地址</span>:{props.hotel.address}
            </div>
            <div className={style.description}>
                <span style={{'fontWeight':'bold'}}>描述</span>:{props.hotel.description}
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={style.rightContent}>
            <div className={style.minPrice}>
              <span style={{'fontSize':'30px','color':'#2681ff'}}>{props.hotel.minPrice}</span>起
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HotelDetailCard