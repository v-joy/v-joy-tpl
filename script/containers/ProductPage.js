/**
 * @file 产品详情页
 * @author nosql@icloud.com
 * @date 2016-03-19
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './productPage.css';

// 导入相关的actions
import * as productActionCreators from '../actions/Product';


class StaticPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {productActions} = this.props;
        productActions.fetchProduct(this.props.params.productId);
    }

    componentDidUpdate() {
        if (this.props.product.chinesename) {
            document.title = this.props.product.chinesename + '@红药丸';
        };
    }

    render() {
        let {product} = this.props;
        let platformlist = [];
        if (product.platform) {
            product.platform.map((platform,i) => {
                return platformlist.push(
                    <span key={i} className="f-left platform-device">{platform}</span>
                );
            });
        };
        let pilllist = [];
        if (product.score) {
            let score = Math.round(product.score);
            for (var i = 0; i < score; i++) {
                pilllist.push(
                    <img key={i} className="product-score" src="/asset/imgs/pill.png" />
                );
            };
        };
        let picurl = '';
        if (product.picture) {
            picurl = product.picture.src;
        };
        return (
            <div className="product-container">
                <div>
                    <div className="f-left">
                        <p className="product-chinesename">{product.chinesename}</p>
                        <p className="product-name">{product.name}</p>
                    </div>
                </div>
                <img className="product-picture" src={picurl} />
                <div className="product-platform clear">
                    <div className="f-left">
                        <img className="f-left" src="/asset/imgs/OS.png" />
                        <span className="f-left platform-title">支持设备</span>
                        <div className="clear"></div>
                        {platformlist}
                    </div>
                    <div className="f-right">
                        {pilllist}
                        <p className="product-scorenum">{product.score} 分</p>
                    </div>
                </div>
                <hr />
                <pre className="product-desc">{product.description}</pre>
                <hr />
                <p className="product-toplink">还想看看别的游戏吗？点击查看 <Link to="/rank/">最新榜单</Link>吧！</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        product: state.product
    };
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActionCreators, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(StaticPage);
