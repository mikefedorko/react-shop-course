/* eslint-disable no-console */

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import MenuList from './Menu-List/MenuList';
import CategorySelector from './CategorySelectror';

import * as api from '../services/api';

const styles = {
  link: {
    textTransform: 'none',
    fontSize: '15px'
  },

  div: {
    borderBottom: '2px solid gray'
  }
};

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuPage extends Component {
  state = {
    menu: [],
    categories: []
  };

  // eslint-disable-next-line consistent-return
  componentDidMount() {
    const category = getCategoryFromProps(this.props);

    api
      .getCategories()
      .then(categories => this.setState({ categories }))
      .catch(error => console.log(error));

    if (!category) {
      return api
        .getAllMenuItems()
        .then(menu => this.setState({ menu }))
        .catch(error => console.log(error));
    }
  }

  // eslint-disable-next-line consistent-return
  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;

    if (!nextCategory) {
      api
        .getAllMenuItems()
        .then(menu => this.setState({ menu }))
        .catch(error => console.log(error));
    }

    if (nextCategory) {
      this.getMenuItemsWithCategory(nextCategory);
    }
  }

  getMenuItemsWithCategory = category => {
    api
      .getMenuItemsWithCategory(category)
      .then(menu => this.setState({ menu }))
      .catch(error => console.log(error));
  };

  handleCategoryChange = category => {
    const { history, location } = this.props;

    history.push({
      pathname: location.pathname,
      search: `category=${category}`
    });
  };

  handleClearFilter = () => {
    const { history, location } = this.props;

    return history.replace({
      pathname: location.pathname
    });
  };

  render() {
    const { menu, categories } = this.state;
    const { location } = this.props;

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <Fragment>
        <div style={styles.div}>
          <Link
            to={{
              pathname: '/menu/add',
              state: { from: location }
            }}
            style={styles.link}
          >
            Добавить элемент меню
          </Link>
        </div>
        <CategorySelector
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <br />
        {location.search === `?category=${currentCategory}` && (
          <div style={styles.div}>
            <button type="button" onClick={this.handleClearFilter}>
              Очистить фильтр
            </button>
            <br />
            <h4>Текущий фильтр: {currentCategory}</h4>
          </div>
        )}
        <MenuList menu={menu} />
      </Fragment>
    );
  }
}
