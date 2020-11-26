import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class Header extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Link to="/products">Products</Link>
        <Link to="/user">User</Link>
        <button onClick={this.props.logout}>LogOut</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(userActions.logout())
  };
}

const connectedHeader = connect(null, mapDispatchToProps)(Header);
export { connectedHeader as Header };