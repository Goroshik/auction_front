import React from 'react';

class InputComponent extends React.Component {
  handleChange = event => {
    this.props.onChange(event.target);
  }

  render() {
    const { name, type, value, disabled = false, min = 0 } = this.props;
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={this.handleChange}
          disabled={disabled}
          min={min}
        />
        {this.props.submittled && !value && <div>{name} is required</div>}
      </div>
    );
  }
}

export { InputComponent };