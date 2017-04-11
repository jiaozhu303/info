import React, {Component} from 'react';
import './index.css';

class Skills extends Component {


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
            {id: 1, styleName: "icon-weixin", title: "微信", desc: "小程序"},
            {id: 2, styleName: "icon-github", title: "CVS", desc: "github"},
            {id: 3, styleName: "icon-html", title: "html", desc: "H5"},
            {id: 4, styleName: "icon-jquery", title: "js", desc: "jquery"},
            {id: 5, styleName: "icon-javascript", title: "js", desc: "javascript"},
            {id: 6, styleName: "icon-css", title: "css3", desc: "H5"},
            {id: 7, styleName: "icon-sass", title: "sass", desc: "H5"},
            {id: 8, styleName: "icon-react", title: "react", desc: "H5"}
        ];
        return (<div className="skills">
            <div className="skills-title">专业技能</div>
            <div className="skills-content">
                {this.getItem(data)}
            </div>
        </div>);
    }
}

export default Skills;

