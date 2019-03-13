import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: ''
};

export default class SingUp extends Component {
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

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, phone, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Sing Up</button>
      </form>
    );
  }
}
