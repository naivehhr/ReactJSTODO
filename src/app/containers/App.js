import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  }
  render() {
    return (
      <div className="app-root">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps() {
  return {
    // App root state
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
