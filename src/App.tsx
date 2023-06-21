import React, { useEffect } from 'react';
import './App.css';
import {Navbar} from './views/Navbar'
import IndexRouter from './routers/IndexRouter';
import {HashRouter} from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd';
import StoreProvider from './store/StoreProvider';

function App() {


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
