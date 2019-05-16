import { connect } from 'react-redux';
import CartIconView from './cart-icon-view';
import { Selectors } from '../../redux/menu';

const mapState = state => ({
  amount: Selectors.getCartProductsAmount(state)
});

export default connect(mapState)(CartIconView);
