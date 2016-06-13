
var model = require('./Products');
var renderProducts = require('./ProductsView');

renderProducts(
  document.querySelector('#app'),
  model.products
);
