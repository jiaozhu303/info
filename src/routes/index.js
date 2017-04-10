import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from '../layouts/App/index';
import About from '../containers/About/index';
import Contact from '../containers/Contact/index';
import Home from '../containers/Home/index';
import Skills from '../containers/Skills/index';
import Project from '../containers/Project/index';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/project" component={Project}/>
        </Route>
    </Router>
)