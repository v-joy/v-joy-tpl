/**
 * @file 排行榜页面
 * @author nosql@icloud.com
 * @date 2016-03-19
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Rankitem from '../components/rankitem/rankitem';
import './RankPage.scss';

// 导入相关的actions
import * as rankActionCreators from '../actions/rank';

class RankPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {rankActions} = this.props;
        rankActions.fetchRank(this.props.params.rankId || null);
    }

    componentDidUpdate() {
        if (this.props.rank.name) {
            document.title = this.props.rank.name + '@红药丸';
        };
    }

    render() {
        let {rank} = this.props;
        rank.rankitems = rank.rankitems || [];
        let rankItems = [];
        rank.rankitems.map((item,i) => {
            return rankItems.push(
                <Rankitem key={item.id} item={item} rankindex={i}></Rankitem>
            );
        });
        return (
            <div>
                <h2 className="rank-title">{rank.name}</h2>
                <div className="clear rank-subtitle">{rank.subname}</div>
                <ul>
                    {rankItems}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rank: state.rank,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        rankActions: bindActionCreators(rankActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RankPage);
