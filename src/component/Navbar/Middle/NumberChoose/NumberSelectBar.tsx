import React from 'react'
import {PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons'
import {Row,Col} from 'antd'

interface Iprops{
    num:number,
    setNum(n:number):void
}

const NumberSelectBar:React.FC<Iprops> = (props) => {
  return (
    <div style={{'textAlign':'center'}}>
        <Row>
            <Col span={8}>
                <div onClick={()=>{props.setNum(props.num - 1)}}>
                    <MinusCircleOutlined></MinusCircleOutlined>
                </div> 
            </Col>
            <Col span={8}><div>{props.num}</div></Col>
            <Col span={8}>
                <div onClick={()=>props.setNum(props.num + 1)}>
                    <PlusCircleOutlined></PlusCircleOutlined>
                </div>   
            </Col>
        </Row>
    </div>
  )
}

export default NumberSelectBar