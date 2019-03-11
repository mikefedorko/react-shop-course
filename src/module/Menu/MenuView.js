import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ProductList from './ProductList';
import menu from './menu.json';

// eslint-disable-next-line react/prefer-stateless-function
export default class MenuView extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <ProductList menu={menu} />
      </div>
    );
  }
}
