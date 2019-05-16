import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { Animated } from 'react-animated-css';

import { Selectors, AsyncOperations } from '../../components/redux/menu';
import MenuItem from './menu-item-view';
// import Spinner from '../../components/spinner';

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
        {loading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Animated animationIn="fadeIn">
          <MenuItem {...menuItem} onClick={this.handleGoBack} />
        </Animated>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: Selectors.getLoader(state),
  menuItem: Selectors.getItemsById(state)
});

const mapDispatchToProps = {
  getMenuItemById: AsyncOperations.getMenuItemById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItemContainer);
