import React, { Component } from 'react';
import SearchForm from './search-form';
import ProductList from './product-list';
import menu from '../database/menu.json';

class MenuContainer extends Component {
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
        <SearchForm value={inputText} handleChange={this.handleInputChange} />
        <ProductList menu={menu} />
      </div>
    );
  }
}
export default MenuContainer;
