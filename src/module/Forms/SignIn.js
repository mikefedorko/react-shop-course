import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    console.log(this.state);

    this.reset();
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="button">Sign in </button>
      </form>
    );
  }
}
