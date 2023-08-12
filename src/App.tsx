import React, { useEffect } from 'react';
import './App.css';
import {Navbar} from './views/Navbar'
import IndexRouter from './routers/IndexRouter';
import {HashRouter} from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd';
import StoreProvider from './store/StoreProvider';
import userStore from './store/UserStore';


function App() {

  //发一个请求试试有没有登录
  userStore.checkLogin()

  return (
    <div>
        <HashRouter>
          <StoreProvider>
              <ConfigProvider locale={zhCN}>
                <Navbar></Navbar>
                <IndexRouter></IndexRouter>
              </ConfigProvider>
          </StoreProvider> 
        </HashRouter>
    </div>
  );
}

export default App;
