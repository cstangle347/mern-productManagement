import React from 'react';
import './App.css';
import { Link , Router } from '@reach/router';

import AddProduct from './components/AddProduct';
import DisplayProducts from './components/DisplayProducts';
import Product from './components/Product';

function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-dark text-white mt-2 text-center">
        <h1>Product Managment</h1>
        <button className= "btn btn-outline-primary"><Link to="/">Home</Link></button>
        <button className= "btn btn-outline-primary"><Link to="/products">View Products</Link></button>
      </div>
      <AddProduct />
      <hr />
      <Router>
        <DisplayProducts path = "/products" />
        <Product path = "/products/:_id"/>
      </Router>
    </div>
  );
}

export default App;
