import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
    <Card>
      <Card.Body>Product Managment</Card.Body>
    </Card>
      <AddProduct />
    </div>
  );
}

export default App;
