/**
* @Author: huhaoran <aran.hu>
* @Date:   22-10-16
* @Email:  huhaoran3@ucfgroup.com
* @Last modified by:   aran.hu
* @Last modified time: 22-10-16
* @License: © 2016 NCF GROUP ALL RIGHTS RESERVED
*/

import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
class SubButton extends Component {
  static defaultProps = {
    text: 'SubButton',
    loading: false,
    isDisable: false,
    bsStyle: []
  };
  static propTypes = {
    isDisable: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    // maxLoops: React.PropTypes.number.isRequired,
    // posterFrameSrc: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
  };
  /**
  * http://www.bestcssbuttongenerator.com/#/1
  */
  constructor(props) {
    console.log('加载小');
    super(props)
    this.state = {
      // text: this.props.text,
      // loading: this.props.loading
    }
  }

  render() {
    const {text, bsStyle, children, loading} = this.props
    const btnStyle = {bsStyle: 'danger'}
    let divStyle = {
      backgroundColor: 'red',
      width: 100,
      height: 100
    };
    return (
      <div style={divStyle}></div>
    );
  }
}
export default SubButton
