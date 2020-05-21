import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const AddProduct = (props) => {
	const [ title, setTitle ] = useState('');
	const [ price, setPrice ] = useState(null);
	const [ description, setDescription ] = useState('');
	const [ errors, setErrors ] = useState('');

	const createProduct = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8000/api/products/new', { title, price, description })
			.then((res) => {
				if (res.data.errors) {
					setErrors(res.data.errors);
				} else {
					window.location.reload(false);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<Form onSubmit= { createProduct }>
			<Form.Group>
				<Form.Label>Title: </Form.Label>
				<Form.Control onChange={(e) => setTitle(e.target.value)} size="lg" type="text" />
				{errors.title ? <p>{errors.title.message}</p> : ''}
			</Form.Group>
			<Form.Group>
				<Form.Label>Price: </Form.Label>
				<Form.Control onChange={(e) => setPrice(e.target.value)} size="lg" type="text" />
				{errors.price ? <p>{errors.price.message}</p> : ''}
			</Form.Group>
			<Form.Group>
				<Form.Label>Description: </Form.Label>
				<Form.Control onChange={(e) => setDescription(e.target.value)} size="lg" type="text" />
				{errors.description ? <p>{errors.description.message}</p> : ''}
      </Form.Group>
      <input type="submit" />
		</Form>
	)
}
export default AddProduct;
