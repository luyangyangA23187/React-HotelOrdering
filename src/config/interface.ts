export type {Icity,Ihotel,Idistrict}

interface Icity{
    id:number,
    name:string,
    shortName:string,
    city:string,
    province:string,
    levelType:number,
}

interface Idistrict{
    id:number,
    name:string,
    shortName:string,
    cityName:string,
    province:string,
    levelType:number,
}

interface Ihotel{
    id:number,
    cityId:number,
    name:string,
    address:string,
    minPrice:number,
    picture:string,
    longtitude:string,
    latitude:string,
    city:Idistrict
}