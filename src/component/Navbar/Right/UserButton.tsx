import React from 'react'
import { Button,Dropdown,message } from 'antd'
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import userStore from '../../../store/UserStore';

const UserButton = () => {

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        switch(e.key){
            case '1':
                break;
            case '2':
                break;
            case '3':
                userStore.exitLogin()
        }
      };

      const items: MenuProps['items'] = [
        {
          label: '个人信息',
          key: '1',
        },
        {
          label: '我的订单',
          key: '2',
        },
        {
            label: '退出登录',
            key: '3',
          }
      ];
      
      const menuProps = {
        items,
        onClick: handleMenuClick,
      };

  return (
    <div style={{'marginLeft':'15px','marginTop':'40px'}}>
         <Dropdown.Button menu={menuProps}>
            <UserOutlined></UserOutlined>
            用户
        </Dropdown.Button>
    </div>
  )
}

export default UserButton