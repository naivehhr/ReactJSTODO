import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Panel, Button, Alert} from 'react-bootstrap';
import {browserHistory} from 'react-router'
class Hello extends Component {
  constructor() {
    super()
    this.state = {
    }
    console.log('hello constructor');
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={()=>{browserHistory.goBack()}}>Back</Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(mapStateToProps)(Hello)
