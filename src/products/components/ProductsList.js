import React from 'react';

import ProductItem from './ProductItem';

import './ProductsList.css';

const ProductsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No Product found.</h2>
      </div>
    );
  }

  return (
    <ul className="products-list">
      {props.items.map(product =>
        <ProductItem
          key={product.id} 
          id={product.id} 
          name={product.name}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          posted_date={product.posted_date}
          available_date={product.available_date}
          tags={product.tags}
          images={product.images}
        />
      )}
    </ul>
  )
};

export default ProductsList;
