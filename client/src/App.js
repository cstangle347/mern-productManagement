import React from 'react';
import './App.css';
//import axios from 'axios';

import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="container">
      <div className="Jumbotron bg-dark text-white">
        <h1>Product Managment</h1>
      </div>

      <AddProduct />
      <hr />
    </div>
  );
}

export default App;
