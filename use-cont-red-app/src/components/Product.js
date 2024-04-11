import React, {useContext} from 'react'
import {CartContext} from '../store/CartContext'

const Product = ({
    id,
    image,
    title,
    price,
    description,
    // onAddToCart,
  }) => {

    const { addItem } = useContext(CartContext)

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => addItem(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  )
}

export default Product