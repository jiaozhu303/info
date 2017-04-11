import React, {Component} from 'react';
import './index.css';

class About extends Component {


    getItem(data) {

        return data.map((item) => (
            <div className="item" key={item.id}>
                <div className="item-icon">
                    <i className={`icon iconfont ${item.styleName}`}></i>
                </div>
                <div className="item-info">
                    <p className="info-title">{item.title}</p>
                    <p className="info-desc">{item.desc}</p>
                </div>
            </div>
        ));
    }

    render() {
        const data = [
            {id: 1, styleName: "icon-age", title: "年龄", desc: 18},
            {id: 2, styleName: "icon-education", title: "学历", desc: "本科"},
            {id: 3, styleName: "icon-sex", title: "性别", desc: "男"},
            {id: 4, styleName: "icon-University", title: "院校", desc: "北航"},
            {id: 5, styleName: "icon-english", title: "英语", desc: "6级"},
            {id: 6, styleName: "icon-qq", title: "QQ", desc: "1234567"}
        ];
        return (<div className="about">
            <div className="about-title">关于我</div>
            <div className="about-content">
                {this.getItem(data)}
            </div>
        </div>);
    }
}

export default About;
