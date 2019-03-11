import React, { Component } from 'react';

export default class SearchForm extends Component {
  state = {
    inputText: ''
  };

  handleInputChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
