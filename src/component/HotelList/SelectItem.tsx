import React, { useContext } from 'react'
import { Store } from '../../store/StoreProvider'
import { observer } from 'mobx-react'

interface Iprops{
    districtId:number,
    name:string,
}

const SelectItem:React.FC<Iprops> = (props) => {

    //得到当前选择的区域
    const {hotelStore} = useContext(Store)

    const style:React.CSSProperties = {
        display:'inline-block',
        margin:'5px',
        padding:'3px',
        color:'#55555f',
        borderStyle:'solid',
        borderWidth:'1px',
        borderColor:'#aaaaaf',
        borderRadius:'5px',
        cursor:'pointer'
    }

    const active:React.CSSProperties = {
        display:'inline-block',
        margin:'5px',
        padding:'3px',
        color:'#2681ff',
        borderStyle:'solid',
        borderWidth:'1px',
        borderColor:'#2681ff',
        borderRadius:'5px',
        cursor:'pointer'
    }

    function getStyle():React.CSSProperties{
        if(props.districtId === hotelStore.filter.districtId){
            return active
        }
        return style
    }

  return (
    <div style={getStyle()} onClick={()=>{
        hotelStore.changeCurrentDistrictId(props.districtId)
        }}>
        {props.name}
    </div>
  )
}

export default observer(SelectItem)