/**
 * @file 系统所以路由的配置
 * @author nosql@icloud.com
 * @date 2016-03-19
 */

import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../containers/App';
import RankPage from '../containers/RankPage';
import ProductPage from '../containers/ProductPage';

class RouteMap extends Component {
    onUpdate() {
        document.documentElement.scrollTop = document.body.scrollTop =0;
        window._hmt.push(['_trackPageview', window.location.pathname]);
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.onUpdate.bind(this)}>
                <Route path="/" component={App}>
                    <IndexRoute component={RankPage}/>
                    <Route path="/rank/" component={RankPage}/>
                    <Route path="/rank/:rankId" component={RankPage}/>
                    <Route path="/product/:productId" component={ProductPage}/>
                </Route>
            </Router>
        );
    }
}

export default RouteMap;