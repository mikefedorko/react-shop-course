import React, { Component } from 'react';

export default class Comments extends Component {
  state = {
    textarea: ''
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      textarea: ''
    });
  };

  render() {
    const { textarea } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="textarea">
          Comments:
          <br />
          <textarea
            name="textarea"
            value={textarea}
            onChange={this.handleChange}
            id="textarea"
            cols={40}
            rows={5}
          />
          <br />
          <button type="submit">Add comment</button>
        </label>
      </form>
    );
  }
}
