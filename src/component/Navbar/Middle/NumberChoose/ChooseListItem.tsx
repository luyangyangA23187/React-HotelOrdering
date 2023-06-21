import React from 'react'
import style from './ChooseListItem.module.css'
import {Row,Col} from 'antd'

interface Iprops{
    children:React.ReactNode[]
}

const ChooseListItem:React.FC<Iprops> = (props) => {
  return (
    <div className={style.box} onClick={(e)=>e.stopPropagation()}>
        <Row>
            <Col span={8} style={{'cursor':'pointer'}}>
                <div className={style.content}>{props.children[0]}</div>
            </Col>
            <Col span={16} style={{'cursor':'pointer'}}>
                <div className={style.number}>{props.children[1]}</div>
            </Col>
        </Row> 
    </div>
  )
}

export default ChooseListItem