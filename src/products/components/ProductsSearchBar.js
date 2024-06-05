import React, { useState } from 'react';

import './ProductsSearchBar.css';

const ProductsSearchBar = (props) => {
  const [ searchValue, setSearchValue ] = useState("");

  const inputChangeHandler = (event) => {
    setSearchValue(event.target.value);
  }

  const searchConfirmHandlerEnter = (event) => {
    if (event.key === 'Enter') {
      props.onSearch(searchValue);
    }
  }

  const searchConfirmHandlerClick = (event) => {
    props.onSearch(searchValue);
  }

  return (
    <div className="products-search-bar">
      <input 
        className="products-search-bar__input"
        placeholder='搜索您想要的物品 Search for anything you want!'
        value={searchValue}
        onChange={inputChangeHandler}
        onKeyDown={searchConfirmHandlerEnter}
      ></input>
      <button 
        className="products-search-bar__button"
        onClick={searchConfirmHandlerClick}
      >
        Press Enter to Search
      </button>
    </div>
  )
}

export default ProductsSearchBar;