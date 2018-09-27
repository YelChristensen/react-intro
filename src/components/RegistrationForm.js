import React from "react";
import FormInput from "./FormInput";

class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      firstNameError: "",
      lastNameError: "",
      emailError: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveText = this.receiveText.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";

    if (this.state.firstName.length < 1) {
      firstNameError = "Please enter a valid first name";
    }

    if (this.state.lastName.length < 1) {
      lastNameError = "Please enter a valid last name";
    }

    if (
      this.state.emailAddress.length < 5 ||
      !this.state.emailAddress.includes("@")
    ) {
      emailError = "Please enter a valid email address";
    }

    this.setState({
      firstNameError: firstNameError,
      lastNameError: lastNameError,
      emailError: emailError
    });

    if (firstNameError === "" && lastNameError === "" && emailError === "") {
      console.log(`The user's first name is: ${this.state.firstName}, 
        last name is: ${this.state.lastName} and email address: ${
        this.state.emailAddress
      }`);
      this.setState({
        firstName: "",
        lastName: "",
        emailAddress: ""
      });
    }
  }

  receiveText(text, label) {
    if (label === "First Name") {
      this.setState({
        firstName: text
      });
    } else if (label === "Last Name") {
      this.setState({
        lastName: text.toUpperCase()
      });
    } else {
      this.setState({
        emailAddress: text
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput
          receiveText={this.receiveText}
          text={this.state.firstName}
          label="First Name"
          errorMessage={this.state.firstNameError}
        />
        <FormInput
          receiveText={this.receiveText}
          text={this.state.lastName}
          label="Last Name"
          errorMessage={this.state.lastNameError}
        />
        <FormInput
          receiveText={this.receiveText}
          text={this.state.emailAddress}
          label="Email Address"
          errorMessage={this.state.emailError}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;