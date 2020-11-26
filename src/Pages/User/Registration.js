import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userActions, errorAction } from '../../actions';
import { InputComponent, ErrorComponent } from '../../components';

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      checkPassword: '',
      firstName: '',
      lastName: '',
      submitted: false,
    };
  }

  checkAuthData(userData) {
    const validData = true;

    if (userData.password !== this.state.checkPassword) {
      this.props.setError('passwords do not match');
      return !validData;
    }

    if (!userData.email && !userData.password) {
      this.props.setError('not all fields are filled');
      return !validData;
    }

    return validData;
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.resetError();

    const userData = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    if (!this.checkAuthData(userData)) {
      return;
    }

    this.props.add(userData);
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
        <h2>Registration</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <InputComponent
            name="email"
            type="email"
            value={user.email}
            onChange={this.handleChange}
            submitted={submitted}
          />
          <InputComponent
            name="firstName"
            type="firstName"
            value={user.firstName}
            onChange={this.handleChange}
            submitted={submitted}
          />
          <InputComponent
            name="lastName"
            type="lastName"
            value={user.lastName}
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
          <InputComponent
            name="checkPassword"
            type="password"
            value={user.checkPassword}
            onChange={this.handleChange}
            submitted={submitted}
          />
          <div>
            <button type="submit">Sign In</button>
            <Link to="/login">Login</Link>
          </div>
          {this.props.error.message && <ErrorComponent error={this.props.error} />}
        </form>
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
    add: user => dispatch(userActions.registration(user)),
    setError: message => dispatch(errorAction.set(message)),
    resetError: () => dispatch(errorAction.reset())
  };
}

const connectedRegistrationPage = connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
export { connectedRegistrationPage as RegistrationPage };
