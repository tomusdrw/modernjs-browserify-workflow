
// const model = require('./Products');
import products from './components/Products';
import {renderProducts} from './components/ProductsView';

renderProducts(
  document.querySelector('#app'),
  products
);
