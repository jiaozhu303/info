import React from 'react';
import {Timeline} from 'antd';


const TimelineItem = (props) => {
    return (
        <Timeline.Item key={props.created_at}>
            <div className="item-title">{props.name} -
            <a href={props.html_url} className="item-link" target="__blank">
                <i className="icon iconfont icon-link">查看详情</i>
            </a></div>
            <div className="item-info">{props.description}</div>
        </Timeline.Item>
    );
}

export default TimelineItem;