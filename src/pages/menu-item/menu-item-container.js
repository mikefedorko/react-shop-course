import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Selectors, AsyncOperations } from '../../components/redux/menu';

import MenuItem from './menu-item';
import Spinner from '../../components/spinner/spinner';

class MenuItemContainer extends Component {
  componentDidMount() {
    const { match, getMenuItemById } = this.props;

    getMenuItemById(match.params.id);
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    const { state } = location;

    if (state) {
      history.push(state.from);
    } else {
      history.push({
        pathname: '/menu'
      });
    }
  };

  render() {
    const { menuItem, loading } = this.props;
    return (
      <Fragment>
        {loading && <Spinner />}
        <MenuItem {...menuItem} onClick={this.handleGoBack} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: Selectors.getLoader(state),
  menuItem: Selectors.getItemsById(state)
  // ОБГОВОРИТЬ ОБНУЛЕНИЕ ЕГО ПРИ ВЫХОДЕ C РАУТА!!!!!!!!
});

const mapDispatchToProps = {
  getMenuItemById: AsyncOperations.getMenuItemById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItemContainer);
