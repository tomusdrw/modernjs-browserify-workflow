
// const model = require('./Products');
import {products} from './Products';
const renderProducts = require('./ProductsView');

renderProducts(
  document.querySelector('#app'),
  products
);
