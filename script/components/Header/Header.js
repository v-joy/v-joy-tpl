/**
 * @file 系统页面的header部分
 * @author nosql@icloud.com
 * @date 2016-03-19
 */

import React from 'react';
import {Link} from 'react-router';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="topNavMenu">
                <ul role="nav">
                    <li>
                        <Link to="/" activeClassName="active">最新排行榜</Link>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active">历史排行榜</Link>
                    </li>
                    <li>
                        <Link to="/article/1" activeClassName="active">关于我们</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;