/**
* @Author: aran.hu
* @Date:   22-10-16
* @Email:  huhaoran3@ucfgroup.com
* @Last modified by:   aran.hu
* @Last modified time: 27-10-16
* @License: © 2016 NCF GROUP ALL RIGHTS RESERVED
*/


import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import {Button} from 'react-bootstrap';
import SubButton from '../components/common/button/SubButton.js'

class ComponentTest extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false
    }
    // console.log('hello constructor');
    // console.log(SubButton);
  }
  _onClick() {
    this.setState({
      isLoading: true,
    })
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  render() {
    const {isLoading} = this.state
    return (
      <div id="example" >
        <h3>SubmitButton Test</h3>
        <SubButton
          onClick={this._onClick.bind(this)}
          isLoading={isLoading}
          />
        <i className="fa fa-refresh fa-spin">{isLoading ? '加载中...' : '加载'}</i>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(ComponentTest)
