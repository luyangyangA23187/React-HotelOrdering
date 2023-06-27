import React, { useContext } from 'react'
import style from './RoomCard.module.css'
import {Row, Col, Button} from 'antd'
import { Ibreakfast, Iroom } from '../../config/interface'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../store/StoreProvider'
import { observer } from 'mobx-react'

const RoomCard:React.FC<{room:Iroom}> = (props) => {

    const navigate = useNavigate()
    
    const {hotelStore} = useContext(Store)

    const breakfastList:Ibreakfast[] = hotelStore.breakfastList

    function hasBreakFast(index:number):boolean{
        if(hotelStore.breakfastList.length > index){
            return true
        }
        return false
    }

    function getPrice(price:number,index:number):number{
        if(!price) return 0
        if(hasBreakFast(index)){
            return price + breakfastList[index].price
        }

        return price
    }

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
                                        <Button type={'primary'} onClick={()=>{
                                            if(hasBreakFast(0)){
                                            navigate(`./${props.room.id}/${breakfastList[0].id}/order`)
                                            }
                                        }}>
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
                                        <span>{getPrice(props.room.price,1)} </span>
                                        <Button type={'primary'} 
                                        onClick={()=>{
                                            if(hasBreakFast(1)){
                                            navigate(`./${props.room.id}/${breakfastList[1].id}/order`)
                                            }
                                        }}
                                        disabled={!hasBreakFast(1)}>
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
                                        <span>{getPrice(props.room.price,2)} </span>
                                        <Button type={'primary'} 
                                        onClick={()=>{
                                            if(hasBreakFast(2)){
                                            navigate(`./${props.room.id}/${breakfastList[2].id}/order`)
                                            }
                                        }}
                                        disabled={!hasBreakFast(2)}>
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