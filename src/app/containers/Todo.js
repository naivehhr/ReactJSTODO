import '../sass/Todo.scss';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/todo/Header';
import MainSection from '../components/todo/MainSection';
import * as IndexActions from '../actions/todo/index';
import {Panel, Button, Alert} from 'react-bootstrap';
import {browserHistory, Link} from 'react-router'
class Todo extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.state = {
      isAlert: false
    };
    this.handleTest = this.handleTest.bind(this)
  }

  handleTest(event) {
    console.log(browserHistory);
    browserHistory.push('/hello')
  }

  // go() {
  //   console.log('--------');
  //   this.setState({
  //     isAlert: true
  //   });
  // }
  render() {
    const title = (
      <h3>Panel title</h3>
    );
    const pInstance = (
      <div>
        <Panel header={title}>
          Panel content
        </Panel>
      </div>
    );
    const {todos, actions} = this.props;
    return (
      <div>
        <Button bsStyle="danger" onClick={this.handleTest}>😋</Button>
        <Button bsStyle="danger" href="/hello">Danger</Button>
        <Link to="/hello">Link</Link>

        {
          this.state.isAlert ?
            <div>
              <Alert bsStyle="warning">
                <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
              </Alert>
            </div> :
            <div>
              asdf
            </div>
        }
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
