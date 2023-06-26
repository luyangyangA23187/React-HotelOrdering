export type {Icity,Ihotel,Idistrict,IregisterInfo,Iroom}

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
    longtitude:string,
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

//用户注册信息
interface IregisterInfo{
    name:string,
    email:string,
    phone:string,
    sexual:string,
    uid:string,
}