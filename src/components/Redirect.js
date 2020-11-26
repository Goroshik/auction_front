import React from 'react';
import { Redirect } from 'react-router-dom';

class RedirectComponent extends React.Component {
  constructor(props) {
    super(props);
    const paramRedirectTo = this.props.match.params.to;

    this.redirectTo = paramRedirectTo ? paramRedirectTo : 'login';
    this.props.history.push({ from: { path: this.redirectTo } });
  }

  render() {
    return (
      <Redirect to={`/${this.redirectTo}`} />
    );
  }
}

export { RedirectComponent };