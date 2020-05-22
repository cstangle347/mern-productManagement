import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Product = ({ _id }) => {
	console.log(_id);

	const [ product, setProduct ] = useState([]);

	useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + _id )
      .then((res) => {
				setProduct(res.data.product);
		}).catch((err) => {
				console.log(err);
		});
	},[_id]);

	return (
		<div>
			<h4>{product.title}</h4>
			<p>Price: {product.price}</p>
			<p>Description: {product.description}</p>
		</div>
	);
};

export default Product;
