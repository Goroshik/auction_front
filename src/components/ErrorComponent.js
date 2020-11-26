import React from 'react';

class ErrorComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.error.message}
      </div>
    );
  }
}

export { ErrorComponent };