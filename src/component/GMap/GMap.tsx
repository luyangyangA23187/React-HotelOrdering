import React, { useContext, useEffect, } from 'react'
import AMapLoader from '@amap/amap-jsapi-loader';
import style from './GMap.module.css'
import { Store } from '../../store/StoreProvider';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

const GMap = () => {

  const { hotelStore } = useContext(Store)

  const hotelList = hotelStore.hotelList

  const navigate = useNavigate()

  const onClick = (e:any)=>{
    navigate(`/hotels/details/${e.target.exData.id}`)
  }

  //加载地图
  async function loadGMap() {
    AMapLoader.load({
      key: '84013a09ee22ca36acd0a13c4259a8b1', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then(AMap => {
        const map = new AMap.Map('container', {
          mapStyle: 'amap://styles/whitesmoke',
          zoom: 12,
          center: [116.378632, 39.893228],
          lang: 'zh_cn',
          viewMode: '2D',
          pitch: 30,
          resizeEnable: true, //设置缩放
          keyboardEnable: false,
        });

        let aveLongitude: number = 0;
        let aveLatitude: number = 0;
        let hotelNum: number = hotelList.length

        if(!hotelNum) return

        hotelList.forEach((hotel) => {
          const marker = new AMap.Marker({
            position: new AMap.LngLat(hotel.longitude, hotel.latitude),
            title: hotel.name,
            label:{
              content: hotel.name,
              direction:'bottom'
            },
          });
          marker.exData = {id:hotel.id}
          // 将创建的点标记添加到已有的地图实例：
          marker.on('click',onClick)
          map.add(marker);
          //计算平均值
          aveLongitude += parseFloat(hotel.longitude)
          aveLatitude += parseFloat(hotel.latitude)
        })
        map.setCenter([aveLongitude / hotelNum, aveLatitude / hotelNum])
      })
      
      .catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    loadGMap();
  });

  return (
    <div id="container" style={{ height: '300px' }}></div>
  )
}

export default observer(GMap)