import React from 'react'
import { Row,Col } from 'antd'
import CityChoose from './Middle/CityChoose/CityChoose'
import DateChoose from './Middle/DateChoose/DateChoose'
import NumberChoose from './Middle/NumberChoose/NumberChoose'
import SearchBar from './Middle/SearchBar/SearchBar'

const Middle:React.FC = () => {
  return (
    <div>
        <Row>
            <Col span={4}>
              <CityChoose></CityChoose>
            </Col>
            <Col span={8}>
              <DateChoose></DateChoose>
            </Col>
            <Col span={4}>
              <NumberChoose></NumberChoose>
            </Col>
            <Col span={8}>
              <SearchBar></SearchBar>
            </Col>
        </Row>
    </div>
  )
}

export default Middle