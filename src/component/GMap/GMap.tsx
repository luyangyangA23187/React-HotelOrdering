import React, { useContext, useEffect, useRef } from 'react'
import AMapLoader from '@amap/amap-jsapi-loader';
import style from './GMap.module.css'
import { Store } from '../../store/StoreProvider';
import { observer } from 'mobx-react';

const GMap = () => {

  const { hotelStore } = useContext(Store)
  const mapRef = useRef<any>({});

  const hotelList = hotelStore.hotelList

  //加载地图
  async function loadGMap() {
    const AMap = await AMapLoader.load({
      key: '84013a09ee22ca36acd0a13c4259a8b1',
      version: '2.0',
      plugins: [],
      AMapUI: {
        version: '1.1',
        plugins: ['misc/PositionPicker'],
      },
    });

    const map: any = (mapRef.current.map = new AMap.Map('container', {
      mapStyle: 'amap://styles/whitesmoke',
      zoom: 12,
      center: [116.378632, 39.893228],
      lang: 'zh_cn',
      viewMode: '2D',
      pitch: 30,
      resizeEnable: true, //设置缩放
      keyboardEnable: false,
    }));

    let aveLongitude:number = 0;
    let aveLatitude:number = 0;
    let hotelNum:number = hotelList.length

    hotelList.forEach((hotel) => {
      const marker = new AMap.Marker({
        position: new AMap.LngLat(hotel.longitude, hotel.latitude),
        title: hotel.name
      });
      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
      //计算平均值
      aveLongitude += parseFloat(hotel.longitude)
      aveLatitude += parseFloat(hotel.latitude)
    })

    map.setCenter([aveLongitude/hotelNum,aveLatitude/hotelNum])
  }


  useEffect(() => {
    loadGMap();
  }, hotelList);

  return (
    <div id="container" style={{ height: '300px' }}></div>
  )
}

export default observer(GMap)