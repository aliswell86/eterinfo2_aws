import React, { Component } from 'react';
import Header from 'components/common/Header'
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as baseActions from 'store/modules/base';

class HeaderContainer extends Component {

  render() {
    return (
      <Header
      />
    );
  }
}

export default connect(
  (state) => ({
    // logged: state.base.get('logged'),
    // token: state.base.get('token'),
    // stateKey: state.base.get('stateKey'),
    // profileId: state.base.get('profileId')
  }),
  (dispatch) => ({
    // BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);