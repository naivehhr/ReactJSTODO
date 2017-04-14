/**
* @Author: huhaoran <aran.hu>
* @Date:   19-10-16
* @Email:  huhaoran3@ucfgroup.com
* @Last modified by:   aran.hu
* @Last modified time: 26-10-16
* @License: © 2016 NCF GROUP ALL RIGHTS RESERVED
*/

import '../sass/Todo.scss';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/todo/Header';
import MainSection from '../components/todo/MainSection';
import * as IndexActions from '../actions/todo/index';
import {Panel, Button, Alert, Table} from 'react-bootstrap';
import {browserHistory, Link} from 'react-router'

import * as Actions from '../actions'
class Todo extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    // actions: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.state = {
      isAlert: false,
      dataList: []
    };
    this.handleTest = this.handleTest.bind(this)
  }

  componentDidMount() {
    this.handleTest()
    // console.log(this.props.dispatch);
  }

  componentWillUnmount() {
    console.log('我卸载啦');
  }

  async handleTest(event) {
    // browserHistory.push('/hello')
    try {
      const {incomplete_results, items, total_count} = await this.httpGet('https://api.github.com/search/repositories?q=javascript&sort=stars')
      this.setState({
        dataList: items
      })
    } catch (e) {
      console.log(e);
    } finally {

    }
  }

  httpGet(url) {
    return new Promise((resolve, reject) => {
      const meta = {
        headers: {
          method: "GET",
        }
      }
      fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
      .catch(e => {
        reject(e)
      })
    });
  }

  login() {
    this.props.dispatch(Actions.doLogin())
  }
  // go() {
  //   console.log('--------');
  //   this.setState({
  //     isAlert: true
  //   });
  // }
  render() {
    const {dataList} = this.state
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
    let tableInstance
    if (dataList) {
      tableInstance = dataList.map((item, index) => {
        return (
          <tr key={index}>
            <td>index</td>
            <td>{item.open_issues}</td>
            <td>{item.repos_url}</td>
          </tr>
        )
      })
    }

    const {todos, user} = this.props;
    return (
      <div>
        <div>
        </div>
        <div>
          登录状态： {user.isLogin ? '已登录' : '未登录'}
        </div>
        <Button bsStyle="success" onClick={this.login.bind(this)}>登录</Button>
        <Button bsStyle="danger" onClick={this.handleTest}>Get Test</Button>
        <Button bsStyle="danger" href="/hello"><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>Danger</Button>
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
        <Table >
          <tbody>
            {tableInstance}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    user: state.users
  };
}

module.exports = connect(mapStateToProps)(Todo);
