import { connect } from 'react-redux';

import Cart from './cart';

import { Selectors, Actions } from '../../components/redux/menu';

const mapStateToProps = state => ({
  products: Selectors.getCartProducts(state)
});

const mapDispathToProps = {
  incrementAmount: Actions.incrementAmount,
  decrementAmount: Actions.decrementAmount,
  removeFromCart: Actions.removeFromCart
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Cart);
