import React, {Component} from 'react';
import {Timeline} from 'antd';
import TimelineItem from './TimelineItem';
import './index.css';

import {fetchRepos} from '../../api/fetchGitHub';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {repos: []};
    }

    componentWillMount() {
        fetchRepos('jiaozhu303').then(info => {
            this.setState({repos: info.data});
        });
    }

    render() {

        console.log(this.state.repos);

        return (<div className="project">
            <div className="project-title">我的项目经验</div>
            <div className="project-content">
                <Timeline>
                    {this.state.repos.map(item => (
                        TimelineItem(item)
                    ))}
                </Timeline>
            </div>
        </div>);
    }
}

export default Project;
