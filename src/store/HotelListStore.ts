import React from 'react'
import { makeAutoObservable,configure } from 'mobx'
import { createContext } from 'react'
import { Dayjs} from 'dayjs'
import { Icity } from '../config/interface'

interface Idate{
    year:number,
    month:number,
    day:number,
}

class HotelListStore{
    constructor(){
        makeAutoObservable(this)
    }
    
    //状态
    //城市列表
    cityList:Icity[]|undefined =[]
    //当前城市
    currentCity:Icity = {
        id:110100,
        levelType:2,
        name:"北京市",
        shortName:"北京",
        city:"北京",
        province:"北京"
    }
    //入住日期
    date_0:Idate = {
        year:2023,
        month:6,
        day:17
    }
    //日历展示
    calendarShow_0:boolean = false;
    //离开日期
    date_1:Idate = {
        year:2023,
        month:6,
        day:17
    }
    //日历展示
    calendarShow_1:boolean = false;
    //房间数
    roomNum:number = 1;
    //入住成人数
    adultNum:number = 1;
    //入住儿童书数
    childNum:number = 0;

    //方法
    //更改城市列表
    changeCityList(list:Icity[]|null){
        //没有则返回
        if(!list) return
        this.cityList = list
    }
    //更改日期
    changeDate(index:number,date:Idate){
        switch(index){
            case 0:
                this.date_0 = date
                break
            case 1:
                this.date_1 = date
                break
        }
    }

    //更改日历展示
    calendarShow(index:number,show:boolean){
        switch(index){
            case 0:
                this.calendarShow_0 = show
                break
            case 1:
                this.calendarShow_1 = show
                break
        }
    }

    //改变房间数
    changeRoomNum(num:number){
        //房间数不能等于0
        if(num <= 0) return
        this.roomNum = num
        //成人数不能小于房间数
        if(this.adultNum<this.roomNum){
            this.adultNum = num
        }
    }

    //改变成人数
    changeAdultNum(num:number){
        //成人数不能小于0
        if(num <= 0) return
        this.adultNum = num
        //成人数不能小于房间数
        if(this.adultNum<this.roomNum){
            this.roomNum = num
        }
    }

    //改变儿童数
    changeChildNum(num:number){
        //儿童不能为负数
        if(num < 0) return
        this.childNum = num
    }
    //改变当前城市
    changeCurrentCity(id:number){
        this.cityList?.forEach((element)=>{
            if(element.id == id){
                this.currentCity = element
                return
            }
        })
    }
}

const hotelStore = new HotelListStore()
const cityContext = createContext<HotelListStore>(hotelStore)

export default hotelStore