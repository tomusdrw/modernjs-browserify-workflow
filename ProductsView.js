module.exports = renderProducts;

function renderProducts($app, products) {
  for (var k in products) {
    var product = products[k];
    $app.appendChild(document.createTextNode(
      JSON.stringify(product, null, 2)
    ));
  }
}
