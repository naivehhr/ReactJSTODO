import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app/containers/App';
import Todo from './app/containers/Todo';

export default (
  <Route path="/" component={App}>
    <div className="routes-root">
      <IndexRoute component={Todo}/>
    </div>
  </Route>
);
