import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { InputComponent, ErrorComponent } from '../../components';
import { userActions } from '../../actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitted: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const authUser = {
      email: this.state.email,
      password: this.state.password,
    };

    if (!authUser.email && !authUser.password) {
      return;
    }

    this.props.login(authUser);
    this.setState({ submitted: true });
  }

  handleChange = target => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { submitted, ...user } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <InputComponent
            name="email"
            type="email"
            value={user.email}
            onChange={this.handleChange}
            submitted={submitted}
          />
          <InputComponent
            name="password"
            type="password"
            value={user.password}
            onChange={this.handleChange}
            submitted={submitted}
          />
          <div>
            <button type="submit">Login</button>
            <Link to="/signin">Sign In</Link>
          </div>
        </form>
        {this.props.error.message && <ErrorComponent error={this.props.error}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { error } = state;
  return { error };
}

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(userActions.login(user)),
    logout: () => dispatch(userActions.logout())
  };
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
