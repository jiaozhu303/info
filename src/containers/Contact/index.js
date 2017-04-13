import React, {Component} from 'react';
import './index.css';
import {Modal} from 'antd';

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (<div className="contact">
            <h1 className="contact-title">联系我</h1>
            <div className="contact-content">
                <div className="contact-main">
                    <div className="main-item">
                        <div className="contact-icon">
                            <i className="icon iconfont icon-weixin"></i>
                            <div className="item-content">微信：32453647</div>
                        </div>
                    </div>
                    <div className="main-item">
                        <div className="contact-icon">
                            <i className="icon iconfont icon-qq"></i>
                            <div className="item-content">QQ：32453647</div>
                        </div>
                    </div>
                    <a href="jiaozhu303@yeah.net" className="main-item" target="__blank">
                        <div className="contact-icon">
                            <i className="icon iconfont icon-email"></i>
                            <div className="item-content">Email：jiaozhu303@yeah.net</div>
                        </div>
                    </a>
                </div>
                <div className="contact-other">
                    <p className="other-title">其他联系方式</p>
                    <div className="other-content">
                        <span className="other-item"><i onClick={this.showModal}
                                                        className="icon iconfont icon-github"></i></span>
                        <span className="other-item"><i onClick={this.showModal}
                                                        className="icon iconfont icon-zhihu"></i></span>
                        <span className="other-item"><i onClick={this.showModal}
                                                        className="icon iconfont icon-weibo"></i></span>
                    </div>
                </div>
            </div>
            <Modal title="Basic Modal"
                   visible={this.state.visible}
                   onOk={this.handleOk}
                   onCancel={this.handleCancel}>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </div>);
    }
}

export default Contact;
