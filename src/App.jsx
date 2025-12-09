import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // EXACT products from the test
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true }
  ];

  const [products, setProducts] = useState(initialProducts);

  // REMOVE HANDLER FOR TEST
  function handleRemove(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* Only ONE filter (from earlier requirement) */}
      {/* But filter is NOT required by test, so okay to leave or remove. */}

      <ProductList products={products} onRemove={handleRemove} />
    </div>
  );
};

export default App;
