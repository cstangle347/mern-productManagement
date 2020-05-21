const productContoller = require('../controllers/product.contoller');

module.exports = (app) => {
    app.get('/api/products', productContoller.allProducts);
    app.post('/api/products', productContoller.createProduct);
    app.get('/api/products/:_id', productContoller.oneProduct);
    app.put('/api/products/update/:_id', productContoller.updateExistingProduct);
    app.delete('/api/products/delete/:_id', productContoller.deleteProduct);
};