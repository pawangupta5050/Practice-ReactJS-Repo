import React from 'react'
import dummyProducts from '../dummyProducts.js';
import Product from './Product.js';

const Shop = ({ onAddItemToCart }) => {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {dummyProducts.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Shop