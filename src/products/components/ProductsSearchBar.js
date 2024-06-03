import React, { useState } from 'react';

import './ProductsSearchBar.css';

const ProductsSearchBar = (props) => {
  const [ searchValue, setSearchValue ] = useState("");

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="products-search-bar">
      <input 
        className="products-search-bar__input"
        placeholder='Search for anything!'
        value={searchValue}
        onChange={searchHandler}
      ></input>
    </div>
  )
}

export default ProductsSearchBar;