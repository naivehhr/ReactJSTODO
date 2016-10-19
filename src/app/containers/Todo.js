import '../sass/Todo.scss';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/todo/Header';
import MainSection from '../components/todo/MainSection';
import * as IndexActions from '../actions/todo/index';

class Todo extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  render() {
    const {todos, actions} = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo}/>
        <MainSection todos={todos} actions={actions}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IndexActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
