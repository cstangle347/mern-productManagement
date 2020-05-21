const Product = require('../models/product.model');

module.exports = {
	allProducts(req, res) {
		Product.find({})
			.then((allProducts) => res.json({ products: allProducts }))
			.catch((err) => res.json(err));
	},

	oneProduct(req, res) {
		Product.findOne({ _id: req.params._id })
			.then((oneProduct) => res.json({ product: oneProduct }))
			.catch((err) => res.json(err));
	},

	createProduct(req, res) {
		Product.create(req.body)
			.then((newlyCreatedProduct) => res.json({ product: newlyCreatedProduct }))
			.catch((err) => res.json(err));
	},

	updateExistingProduct(req, res) {
		Product.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
			.then((updatedProduct) => res.json({ product: updatedProduct }))
			.catch((err) => res.json(err));
	},

	deleteProduct(req, res) {
		Product.deleteOne({ _id: req.params.id })
			.then((result) => res.json({ result: result }))
			.catch((err) => res.json(err));
	},

};
