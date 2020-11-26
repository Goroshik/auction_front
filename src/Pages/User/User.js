import React from 'react';
import { connect } from 'react-redux';

import { userActions, errorAction } from '../../actions';
import { InputComponent, ErrorComponent, Header } from '../../components';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      submitted: false,
    };
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

    this.props.save(userData);
    this.setState({ submitted: true });
  }

  handleChange = target => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.user || nextProps.user.email === prevState.email) {
      return null;
    }

    const { email, firstName, lastName } = nextProps.user;
    return {
      ...prevState,
      email,
      firstName,
      lastName
    };

  }

  componentDidMount() {
    this.props.resetError();
    this.props.getUser();
  }

  render() {
    const { submitted, ...user } = this.state;
    return (
      <div>
        <Header />
        <h2>User Data</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <InputComponent
            name="email"
            type="email"
            value={user.email}
            onChange={this.handleChange}
            submitted={submitted}
            disabled={true}
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
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
        {this.props.error.message && <ErrorComponent error={this.props.error} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, error } = state;
  return { user: user, error };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(userActions.getByToken()),
    save: user => dispatch(userActions.save(user)),
    resetError: () => dispatch(errorAction.reset())
  };
}

const connectedUserPage = connect(mapStateToProps, mapDispatchToProps)(UserPage);
export { connectedUserPage as UserPage };
