/** @flow */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from './containers/base/Base';

import Home from './containers/home/Home';
import Experience from './containers/experience/Experience';
import Works from './containers/works/Works';
import Tools from './containers/tools/Tools';

export default (
    <Route path='/' component={ Base }>
        <IndexRoute component={ Home } />
        <Route path='/home' component={ Home } />
        <Route path='/experience' component={ Experience } />
        <Route path='/works' component={ Works } />
        <Route path='/tools' component={ Tools } />
    </Route>
);
