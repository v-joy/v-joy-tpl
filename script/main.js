/**
 * @file 系统入口文件
 * @author nosql@icloud.com
 * @date 2016-03-19
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';


import configStore from './store/configStore';
import RouterMap from './routes/routes';

// 加载全局的CSS
import '../asset/css/normalize.css';
import '../asset/css/base.css';

// 系统store的基础结构
const initialSate = {
    product: [],
    rank:[]
};

// 创建系统的sotre
const store = configStore(initialSate);
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <RouterMap history={history} />
    </Provider>, document.getElementById('appRoot'));


