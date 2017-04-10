import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from '../layouts/App';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Home from '../containers/Home';
import Skills from '../containers/Skills';
import Project from '../containers/Project';

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