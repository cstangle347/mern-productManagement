import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = (props) => {
	const [ title, setTitle ] = useState("");
	const [ price, setPrice ] = useState(1);
	const [ description, setDescription ] = useState("");
	const [ errors, setErrors ] = useState({});

	const handleSubmit = (event) => {
    event.preventDefault();
    const product = { title, price, description }
		axios
			.post("http://localhost:8000/api/products", product)
			.then((res) => {
				if (res.data.errors) {
					setErrors(res.data.errors);
				} else {
					navigate("/");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<form
			onSubmit={(event) => {
				handleSubmit(event);
      }}
    >

      <div className= "form-group">
        <lable>Title: </lable>
        <input 
          className= "form-control"
          type= "text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        { errors.title ? <p className="text-danger">{errors.title.message}</p> : "" }
      </div>

      <div>
        <lable>Price: </lable>
        <input
          className= "form-control"
          type= "number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        { errors.price ? <p className="text-danger">{errors.price.message}</p> : "" }
      </div>

      <div>
        <lable>Description: </lable>
        <textarea
          className= "form-control"
          type= "text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}>
        </textarea>
        { errors.description ? <p className="text-danger">{errors.description.message}</p> : "" }
      </div>
      <input className="btn btn-secondary mt-3" type= "Submit" />
    
      </form>
	)
}
export default AddProduct;
