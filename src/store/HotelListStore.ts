import React from 'react'
import { makeAutoObservable, configure } from 'mobx'
import { createContext } from 'react'
import { Icity, Ihotel, Idistrict, Iroom, Ibreakfast } from '../config/interface'
import { getCityList, getDistrictList, getHotelList } from '../config/GetData'
import dayjs from 'dayjs'

interface Idate {
    year: number,
    month: number,
    day: number,
}

//过滤器接口
interface Ifilter {
    //关键词
    keyWords: string,
    //区域ID
    districtId: number,
}

class HotelListStore {
    constructor() {
        makeAutoObservable(this)
    }

    //状态
    //城市列表
    cityList: Icity[] | undefined = []
    //区域列表
    disstrictList: Idistrict[] = []
    //酒店列表
    hotelList: Ihotel[] = []
    //当前酒店
    currentHotelId: number = 0
    //房间列表
    roomList: Iroom[] = []
    //早餐列表
    breakfastList: Ibreakfast[] = []
    //当前城市
    currentCity: Icity = {
        id: 110100,
        levelType: 2,
        name: "北京市",
        shortName: "北京",
        city: "北京",
        province: "北京"
    }
    //入住日期
    date_0: Idate = {
        year: 2023,
        month: 6,
        day: 17
    }
    //日历展示
    calendarShow_0: boolean = false;
    //离开日期
    date_1: Idate = {
        year: 2023,
        month: 6,
        day: 17
    }
    //日历展示
    calendarShow_1: boolean = false;
    //预订日期的二进制表示,如果均在一个月内则第二个参数无效
    reserveNum: number[][] = [[0, 0], [0, 0]]
    //房间数
    roomNum: number = 1;
    //入住成人数
    adultNum: number = 1;
    //入住儿童书数
    childNum: number = 0;
    //酒店筛选条件
    filter: Ifilter = {
        districtId: 0,
        keyWords: '',
    }

    //方法
    //更改城市列表
    changeCityList(list: Icity[] | null) {
        //没有则返回
        if (!list) return
        this.cityList = list
    }
    //改变区域列表
    changeDistrictList(list: Idistrict[] | null) {
        //没有则返还
        if (!list) return
        this.disstrictList = list
    }
    //改变当前区域
    changeCurrentDistrictId(id: number) {
        console.log(id, this.filter.districtId)
        if (id == this.filter.districtId) {
            this.filter.districtId = 0
            return
        }
        this.filter.districtId = id
    }
    //改变酒店列表
    changeHotelList(list: Ihotel[] | null) {
        //没有则返回
        if (!list) return
        this.hotelList = list
    }
    //改变当前酒店
    changeCurrentHotelId(id: number) {
        if (id == this.currentHotelId) return
        this.currentHotelId = id
    }
    //改变房间列表
    changeRoomList(list: Iroom[]) {
        this.roomList = list
    }
    //改变早餐列表
    changeBreakfastList(list: Ibreakfast[]) {
        this.breakfastList = list
    }

    //更改日期
    changeDate(index: number, date: Idate) {
        switch (index) {
            case 0:
                this.date_0 = date
                break
            case 1:
                this.date_1 = date
                break
        }
        this.changeReserveNum()
    }

    //更改日历展示
    calendarShow(index: number, show: boolean) {
        switch (index) {
            case 0:
                this.calendarShow_0 = show
                break
            case 1:
                this.calendarShow_1 = show
                break
        }
    }

    //改变房间数
    changeRoomNum(num: number) {
        //房间数不能等于0
        if (num <= 0) return
        this.roomNum = num
        //成人数不能小于房间数
        if (this.adultNum < this.roomNum) {
            this.adultNum = num
        }
    }

    //改变成人数
    changeAdultNum(num: number) {
        //成人数不能小于0
        if (num <= 0) return
        this.adultNum = num
        //成人数不能小于房间数
        if (this.adultNum < this.roomNum) {
            this.roomNum = num
        }
    }

    //改变儿童数
    changeChildNum(num: number) {
        //儿童不能为负数
        if (num < 0) return
        this.childNum = num
    }
    //改变当前城市
    changeCurrentCity(id: number) {
        //如果等于当前城市则不用修改
        if (id === this.currentCity.id) return
        this.cityList?.forEach((element) => {
            if (element.id == id) {
                this.currentCity = element
                //修改当前城市后需要重新请求酒店和区域
                getDistrictList(id)
                getHotelList(id)
                return
            }
        })
    }

    //改变搜索关键词
    changeFilterKeyWords(keyWords: string) {
        if (keyWords == this.filter.keyWords) return
        this.filter.keyWords = keyWords
    }

    //通过酒店id获得酒店
    getHotelById(id: number): Ihotel {
        let result: Ihotel = this.hotelList[0]
        this.hotelList.forEach((hotel) => {
            if (id === hotel.id) {
                result = hotel
            }
        })
        return result
    }
    //通过房间id得到房间
    getRoomById(id: number): Iroom {
        let result: Iroom = this.roomList[0]
        this.roomList.forEach((room) => {
            if (id === room.id) {
                result = room
            }
        })
        return result
    }
    //通过早餐id得到早餐
    getBreakfastById(id: number): Ibreakfast {
        let result: Ibreakfast = this.breakfastList[0]
        this.breakfastList.forEach((bre) => {
            if (id === bre.id) {
                result = bre
            }
        })
        return result
    }
    //获取时间
    getTime(index: number): string {
        if (index) {
            return `${this.date_1.year}-${this.date_1.month}-${this.date_1.day}`
        }
        return `${this.date_0.year}-${this.date_0.month}-${this.date_0.day}`
    }
    //获取规整的时间格式
    getFormalTime(index: number): string {
        let result: string = ''
        if (index) {
            result += this.date_1.year + '-'
            if (this.date_1.month > 10) result += this.date_1.month + '-'
            else result += '0' + this.date_1.month + '-'
            if (this.date_1.day > 10) result += this.date_1.day + ''
            else result += '0' + this.date_1.day + ''
            return result
        }
        result += this.date_0.year + '-'
        if (this.date_0.month > 10) result += this.date_0.month + '-'
        else result += '0' + this.date_0.month + '-'
        if (this.date_0.day > 10) result += this.date_0.day + ''
        else result += '0' + this.date_0.day + ''
        return result

    }
    //获取预订日期的二进制表示
    changeReserveNum() {
        let temp: number[][] = [[0, 0], [0, 0]]
        //住房的持续时间
        const lastTime = dayjs(`${this.date_0.year}-${this.date_0.month}-${this.date_0.day}`).diff(
            `${this.date_1.year}-${this.date_1.month}-${this.date_1.day}`, 'day'
        )
        //预定时间跨月份
        if (this.date_0.month != this.date_1.month && this.date_1.day != 1) {
            //入住月份
            temp[0][0] = this.date_0.month
            temp[1][0] = this.date_1.month
            //持续时间-入住月
            let timeBin: string = ''
            for (let i = 0; i < dayjs(this.getTime(0)).daysInMonth(); i++) {
                if (i >= this.date_0.day - 1) {
                    timeBin = `1${timeBin}`
                    continue
                }
                timeBin = `0${timeBin}`
            }
            temp[0][1] = parseInt(timeBin, 2)
            //持续时间-离店月
            timeBin = ''
            for (let i = 0; i < this.date_1.day-1; i++) {
                timeBin = `1${timeBin}`
            }
            temp[1][1] = parseInt(timeBin, 2)
            //赋值
            this.reserveNum = temp
            return
        }
        //预定时间不跨月份
        //入住月份
        temp[0][0] = this.date_0.month
        //入住持续时间
        let timeBin: string = ''
        for (let i = 0; i < this.date_0.day; i++) {
            //终止循环条件
            if (i == this.date_0.day - 1) {
                //入住日期赋1
                timeBin = 1 + timeBin
                for (let j = 0; j < lastTime - 1; j++) {
                    timeBin = `1${timeBin}`
                }
            }
            //其余时间赋值为0
            timeBin = `0${timeBin}`
        }
        temp[0][1] = parseInt(timeBin, 2)
        //赋值
        this.reserveNum = temp
    }
}

const hotelStore = new HotelListStore()
const cityContext = createContext<HotelListStore>(hotelStore)

export default hotelStore