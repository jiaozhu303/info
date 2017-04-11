import React, {Component} from 'react';
import './index.css';


class Contact extends Component {
    render() {
        return (<div className="contact">
            <div className="contact-title">联系我</div>
            <div className="contact-content">
                <div className="contact-main">
                    <div className="main-item">
                        <div className="item-icon"><i className="icon iconfont icon-weixin"></i>
                            <div className="item-content">微信：32453647</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Contact;
