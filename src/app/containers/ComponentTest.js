/**
* @Author: aran.hu
* @Date:   22-10-16
* @Email:  huhaoran3@ucfgroup.com
* @Last modified by:   aran.hu
* @Last modified time: 22-10-16
* @License: © 2016 NCF GROUP ALL RIGHTS RESERVED
*/

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import {Button} from 'react-bootstrap';
import SubButton from '../components/common/SubButton.js'

class ComponentTest extends Component {
  constructor() {
    super()
    this.state = {
    }
    console.log('hello constructor');
    console.log(SubButton);
  }
  render() {
    return (
      <div id="example" >
        <SubButton text={'按钮'} />
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
