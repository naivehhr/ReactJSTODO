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
export default class SubButton1 extends Component {
  static defaultProps = {
    text: 'SubButton',
    loading: false,
    isDisable: false
  };
  static propTypes = {
    isDisable: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    // maxLoops: React.PropTypes.number.isRequired,
    // posterFrameSrc: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
  };

  constructor(props) {
    console.log('加载小');
    super(props)
    this.state = {
      // text: this.props.text,
      // loading: this.props.loading
    }
  }

  render() {
    const {text} = this.props
    return (
      <Button bsStyle="primary">{text}</Button>
    );
  }
}

export class SubButton2 extends Component {
  static defaultProps = {
    text: 'SubButton1',
    loading: false,
    isDisable: false
  };
  static propTypes = {
    isDisable: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    // maxLoops: React.PropTypes.number.isRequired,
    // posterFrameSrc: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
  };

  constructor(props) {
    super(props)
    this.state = {
      // text: this.props.text,
      // loading: this.props.loading
    }
  }

  render() {
    const {text} = this.props
    return (
      <Button bsStyle="primary">{text}</Button>
    );
  }
}
