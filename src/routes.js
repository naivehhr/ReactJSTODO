import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './app/containers/App';
import Todo from './app/containers/Todo';
import Hello from './app/containers/Hello';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Todo}/>
      <Route path="hello" component={Hello}/>
    </Route>
  </Router>
);
