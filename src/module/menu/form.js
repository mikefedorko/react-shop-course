import React, { Component } from 'react';

export default class CommentsAndSelect extends Component {
  state = {
    textarea: '',
    rating: ''
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
      textarea: '',
      rating: ''
    });
  };

  render() {
    const { textarea, rating } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="textarea">
          Comments:
          <textarea
            name="textarea"
            value={textarea}
            onChange={this.handleChange}
            id="textarea"
            cols={40}
            rows={5}
          />
          <button type="submit">Add comment</button>
        </label>
        <select name="rating" value={rating} onChange={this.handleChange}>
          <option value="" disabled>
            ...
          </option>
          <option value="1-5">1-5</option>
          <option value="6-8">6-8</option>
          <option value="9-10">9-10</option>
        </select>
      </form>
    );
  }
}
