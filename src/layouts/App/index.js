import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavMenu from '../NavMenu/index'
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {collapse: true, pathName: "home"};
        this.handleCollapse = this.handleCollapse.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    componentDidUpdate(prevProps, nextProps) {
        let newPathName = window.location.hash.split("/")[1].split("?")[0] || "home";

        if (newPathName !== nextProps.pathName) {
            this.setState({
                collapse: !this.state.collapse,
                pathName: newPathName
            });
        }
    }

    handleCollapse() {
        this.setState({
            collapse: !this.state.collapse,
            pathName: this.state.pathName
        });
    }

    selectItem(pathName) {
        this.setState({
            collapse: !this.state.collapse,
            pathName: pathName
        });
    }

    render() {

        const data = [
            {path: "home", desc: "首页", icon: "icon-index"},
            {path: "skills", desc: "技能", icon: "icon-skill"},
            {path: "project", desc: "项目经验", icon: "icon-project"},
            {path: "about", desc: "关于我", icon: "icon-about"},
            {path: "contact", desc: "联系我", icon: "icon-contact"}
        ];

        return (<div className="box">
            <NavMenu collapse={this.state.collapse}
                     handleCollapse={this.handleCollapse}
                     pathName={this.state.pathName}
                     data={data}
                     selectItem={this.selectItem}
            />
            <div className={this.state.collapse ? "main" : "main main-collapse"}>
                <ReactCSSTransitionGroup
                    className="app"
                    component="div"
                    transitionName="app"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={500}>
                    <div className="content" key={this.props.location.pathname}>
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        </div>);
    }
}

export default App;