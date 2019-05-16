/* eslint-disable no-console */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Animated } from 'react-animated-css';

import {
  Selectors,
  AsyncOperations,
  Actions
} from '../../components/redux/menu';

import MenuList from './menu-list-view';
import CategorySelector from './category-selector';
import Spinner from '../../components/spinner';

import styles from './menu-list-container.module.css';

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

    const { location } = this.props;

    if (prevCategory === nextCategory) return;

    if (!nextCategory) {
      const { getAllMenuItems } = this.props;
      getAllMenuItems();
    }

    if (location.search === `?category=All`) {
      this.handleClearFilter();
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
    const {
      categories,
      location,
      loading,
      addToCart,
      isAuthenticated
    } = this.props;

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2>Menu</h2>
        </div>
        <br />
        <CategorySelector
          categories={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <br />
        {!isAuthenticated && (
          <div className={styles.singup}>
            <h2>Sign up to order</h2>
          </div>
        )}
        {location.search === `?category=${currentCategory}` && (
          <h4 className={styles.filter}>Current Filter: {currentCategory}</h4>
        )}
        {loading && (
          <Animated animationIn="fadeIn">
            <Spinner />
          </Animated>
        )}
        <Animated animationIn="fadeInRight">
          <MenuList {...this.props} addToCart={addToCart} />
        </Animated>
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
