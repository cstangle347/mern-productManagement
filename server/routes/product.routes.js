const productContoller = require('../controllers/product.contoller');

module.exports = (app) => {
    app.get('/api/products', productContoller.allProducts);
    app.get('/api/products/:_id', productContoller.oneProduct);
    app.post('/api/products/new', productContoller.createProduct);
    app.put('/api/products/update/:_id', productContoller.updateExistingProduct);
    app.delete('/api/products/delete/:_id', productContoller.deleteProduct);
};