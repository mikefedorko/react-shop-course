import React, { Component } from 'react';

import * as api from '../services/api';

export default class AddMenuItem extends Component {
  state = {
    name: '',
    image: '',
    price: ''
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddUserItem = evt => {
    evt.preventDefault();

    const { name, image, price } = this.state;
    const { history, location } = this.props;
    const { state } = location;

    const item = {
      name,
      image,
      price: Number(price)
    };

    // eslint-disable-next-line consistent-return
    api.addMenuItem(item).then(status => {
      if (status === 201) {
        if (state) {
          return history.push(state.from);
        }
        history.push({
          pathname: '/menu'
        });
      }
    });

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      image: '',
      price: ''
    });
  };

  render() {
    const { name, image, price } = this.state;
    return (
      <div>
        <form onSubmit={this.handleAddUserItem}>
          <label htmlFor="name">
            Name
            <br />
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="image">
            Image
            <br />
            <input
              type="text"
              placeholder="Enter image url"
              name="image"
              value={image}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="price">
            Price
            <br />
            <input
              type="text"
              placeholder="Enter price"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Добавить</button>
        </form>
      </div>
    );
  }
}
