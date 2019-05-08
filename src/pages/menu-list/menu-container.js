/* eslint-disable no-console */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import {
  Selectors,
  AsyncOperations,
  Actions
} from '../../components/redux/menu';

import MenuList from './menu-list';
import CategorySelector from './category-selectror';
import Spinner from '../../components/spinner/spinner';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuListContainer extends Component {
  // eslint-disable-next-line consistent-return
  componentDidMount() {
    const category = getCategoryFromProps(this.props);

    const { getAllMenuItems, getCategories } = this.props;

    getCategories();

    if (!category) return getAllMenuItems();
  }

  // eslint-disable-next-line consistent-return
  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;

    if (!nextCategory) {
      const { getAllMenuItems } = this.props;

      getAllMenuItems();
    }

    if (nextCategory) {
      this.getMenuItemsWithCategory(nextCategory);
    }
  }

  getMenuItemsWithCategory = category => {
    const { getMenuItemsWithCategory } = this.props;
    getMenuItemsWithCategory(category);
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
    const { categories, location, loading, addToCart } = this.props;

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <div>
        <br />
        <CategorySelector
          categories={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <br />
        {location.search === `?category=${currentCategory}` && (
          <div style={{ borderBottom: '2px solid gray' }}>
            <button type="button" onClick={this.handleClearFilter}>
              Очистить фильтр
            </button>
            <br />
            <h4>Текущий фильтр: {currentCategory}</h4>
          </div>
        )}
        {loading && <Spinner />}
        <MenuList {...this.props} addToCart={addToCart} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: Selectors.getAllMenu(state),
  categories: Selectors.getCategories(state),
  loading: Selectors.getLoader(state),
  isAuthenticated: Selectors.isAuthenticated(state)
});

const mapDispatchToProps = {
  getAllMenuItems: AsyncOperations.getAllMenuItems,
  getMenuItemsWithCategory: AsyncOperations.getMenuItemsWithCategory,
  getCategories: AsyncOperations.getCategories,
  addToCart: Actions.addToCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuListContainer);
