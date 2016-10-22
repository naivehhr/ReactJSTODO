import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import todos from './todos';
import users from './users'

const rootReducer = combineReducers({
  users,
  todos,
  routing: routerReducer
});

export default rootReducer;
