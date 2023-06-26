import React from 'react'
import style from './RoomCard.module.css'
import {Row, Col, Button} from 'antd'
import { Iroom } from '../../config/interface'
import { useNavigate } from 'react-router-dom'

const RoomCard:React.FC<{room:Iroom}> = (props) => {

    const navigate = useNavigate()

  return (
    <div className={style.box}>
        <Row>
            <Col span={6}>
                <div className={style.roomType}>
                    <div className={style.roomTypeName}>
                        {props.room.type}
                    </div>
                    <div className={style.roomPicture}>
                        <img src={props.room.picture} alt="" 
                        style={{'height':'160px','width':'100%'}}/>
                    </div>
                </div>
            </Col>
            <Col span={18}>
                <div>
                    <div className={style.breakfast}>
                        <div className={style.breakfastContent}>
                            <Row>
                                <Col span={4}>无早餐</Col>
                                <Col span={12}></Col>
                                <Col span={8}>
                                    <div style={{'fontSize':'20px'}}>
                                        <span>{props.room.price} </span>
                                        <Button type={'primary'} onClick={()=>navigate(`./${props.room.id}/order`)}>
                                            预 订
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className={style.breakfast}>
                        <div className={style.breakfastContent}>
                            <Row>
                            <Col span={4}>单早餐</Col>
                                <Col span={12}></Col>
                                <Col span={8}>
                                    <div style={{'fontSize':'20px'}}>
                                        <span>{props.room.price} </span>
                                        <Button type={'primary'} onClick={()=>navigate(`./${props.room.id}/order`)}>
                                            预 订
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className={style.breakfast}>
                        <div className={style.breakfastContent}>
                            <Row>
                            <Col span={4}>双早餐</Col>
                                <Col span={12}></Col>
                                <Col span={8}>
                                    <div style={{'fontSize':'20px'}}>
                                        <span>{props.room.price} </span>
                                        <Button type={'primary'} onClick={()=>navigate(`./${props.room.id}/order`)}>
                                            预 订
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default RoomCard