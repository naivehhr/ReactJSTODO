/**
* @Author: huhaoran <aran.hu>
* @Date:   19-10-16
* @Email:  huhaoran3@ucfgroup.com
* @Last modified by:   aran.hu
* @Last modified time: 24-10-16
* @License: © 2016 NCF GROUP ALL RIGHTS RESERVED
*/



import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './app/containers/App';
import Todo from './app/containers/Todo';
import Hello from './app/containers/Hello';
import ComponentTest from './app/containers/ComponentTest';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ComponentTest}/>
      <Route path="hello" component={Hello}/>
      <Route path="componentTest" component={Hello}/>
    </Route>
  </Router>
);
