/**
* @Author: huhaoran <aran.hu>
* @Date:   22-10-16
* @Email:  huhaoran3@ucfgroup.com
* @Last modified by:   aran.hu
* @Last modified time: 24-10-16
* @License: © 2016 NCF GROUP ALL RIGHTS RESERVED
*/



import '../../../sass/SubBtn.scss';

import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';


class SubButton extends Component {
  static defaultProps = {
    isLoading: false,
    bsStyle: null,
    className: 'sub-button',
    onClick: null,
    cusStyle: null
  };
  static propTypes = {
    onClick: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    bsStyle: React.PropTypes.oneOf([null, '', 'success', 'warning', 'danger', 'info', 'default', 'primary', 'link']),
    className: React.PropTypes.string,
  };
  /**
  * http://www.bestcssbuttongenerator.com/#/1
  */
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  _onClick() {
    if (this.props.onClick) {
      onClick()
    }
  }

  render() {
    const {bsStyle, className, children, isLoading, onClick} = this.props
    return (
        <Button
          bsStyle={bsStyle}
          disabled={isLoading}
          className={className}
          onClick={onClick}
          isLoading={isLoading}
          >
          {children}
        </Button>
    );
  }
}
export default SubButton
