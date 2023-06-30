export type {Icity,Ihotel,Idistrict,IregisterInfo,
    Iroom,Iorder,Ilogin,IuserInfo,Ibreakfast}

//城市信息
interface Icity{
    id:number,
    name:string,
    shortName:string,
    city:string,
    province:string,
    levelType:number,
}

//区域信息
interface Idistrict{
    id:number,
    name:string,
    shortName:string,
    cityName:string,
    province:string,
    levelType:number,
}

//酒店信息
interface Ihotel{
    id:number,
    cityId:number,
    name:string,
    address:string,
    minPrice:number,
    picture:string,
    longitude:string,
    latitude:string,
    city:Idistrict,
    description:string
}

//房间信息
interface Iroom{
    hotId:number,
    id:number,
    picture:string,
    price:number,
    type:string,
}

//早餐信息
interface Ibreakfast{
    id:number,
    hotId:number,
    type:string,
    price:number
}

//用户注册信息
interface IregisterInfo{
    name:string,
    email:string,
    phone:string,
    sexual:string,
    uid:string,
}

//用户登录信息
interface Ilogin{
    emailAddress:string,
    code:string,
}

//用户信息
interface IuserInfo{
    useId:number,
    email:string,
    name:string,
    phone:string,
    sexual:string,
    uid:string,
}

//订单信息
interface Iorder{
    id?:number,
    rooId:number,
    roomNum:number,
    useId:number,
    breId:number,
    price:number,
    checkin:string,
    checkout:string,
    preserveNum?:number,
}
