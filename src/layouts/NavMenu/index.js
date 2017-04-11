import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router';
import './index.css';

class NevMenu extends Component {


    render() {

        const data = this.props.data;

        const getMenu = (data) => {
            return data.map((info) => (
                <Menu.Item key={info.path}>
                    <Link to={info.path === "home" ? "/" : `/${info.path}`}>
                        <i className={`icon iconfont ${info.icon}`}>&nbsp;&nbsp;</i>
                        {this.props.collapse ? <span className="nav-text">{info.desc}</span> : ""}
                    </Link>
                </Menu.Item>
            ));
        };

        return (
            <aside className={this.props.collapse ? "layout-aside" : "layout-aside layout-aside-collapse"}>
                <div className="layout-logo">
                    <i className="icon iconfont icon-jianli logo">&nbsp;</i>
                    {this.props.collapse ? <span className="title-text">zhaoDJ</span> : ""}
                </div>
                <Menu mode="inline" theme="dark" defaultSelectedKeys={["home"]}
                      selectedKeys={[this.props.pathName]}>
                    {getMenu(data)}
                </Menu>
                <div className={this.props.collapse ? "aside-action" : "aside-action aside-action-collapse"}
                     onClick={this.props.handleCollapse}>
                    {this.props.collapse ? <Icon type="left"/> : <Icon type="right"/>}
                </div>
            </aside>
        );
    }
}

export default NevMenu;