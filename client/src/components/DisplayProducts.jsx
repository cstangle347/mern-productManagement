import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router'

const DisplayProducts = (props) => {
  const [products, setProducts] = useState ([]);

  const fetchProducts = () => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        //console.log(res);
        setProducts(res.data.products);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchProducts();
  }, [props]);

  const handleDelete = (e) => {
    axios.delete('http://localhost:8000/api/products/delete/${_id}')
    .then((res) => {
      console.log(res);
      //navigate("/");
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
    <h2 className="text-center">All Products:</h2>
    <hr />
    <div className="row">
      {products.map(product => {
        return (
          <div key={product._id}>
          <div className= "card width: 24rem;">
            <div className= "card-body">
              <h4 className= "card-title">{product.title}</h4>
              <button className="btn btn-outline-info mx-1">
                <Link to={`/products/${product._id}`}>Info</Link>
              </button>
              <button className="btn btn-outline-warning mx-1">
                <Link to={`/products/${product._id}`}>Update</Link>
              </button>
              <button 
                className="btn btn-outline-danger mx-1"
                onClick= {(e) =>{
                  handleDelete(product._id);
                }}
                >
                Delete
              </button>
            </div>
          </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default DisplayProducts;
