import React from "react";

class FormInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.receiveText(event.target.value, this.props.label);
  }

  render() {
    return (
      <React.Fragment>
        <label>{this.props.label}</label>
        <input
          type="text"
          value={this.props.text}
          onChange={this.handleChange}
        />
        <p>{this.props.errorMessage}</p>
      </React.Fragment>
    );
  }
}

export default FormInput;