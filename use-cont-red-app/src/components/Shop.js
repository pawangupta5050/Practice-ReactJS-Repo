import React, {useContext} from 'react'
import dummyProducts from '../dummyProducts.js';
import Product from './Product.js';
import {CartContext} from '../store/CartContext.jsx';

const Shop = () => {

  const {addItem} = useContext(CartContext)

  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {dummyProducts.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={addItem} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Shop