import { connect } from 'react-redux';
import CartIconView from './cartIconView';
import { Selectors } from '../../redux/menu';

const mapState = state => ({
  amount: Selectors.getCartProductsAmount(state)
});

export default connect(mapState)(CartIconView);
