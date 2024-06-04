import React, { useState, useEffect, useCallback } from 'react';

import ProductsList from '../components/ProductsList';
import { useHttpClient } from '../../customHooks/http-hook';
import ProductsSearchBar from '../components/ProductsSearchBar';

import './Products.css';

const Products = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/products'
        );

        setLoadedProducts(responseData.products);
        setFilteredProducts(responseData.products);
      } catch (err) { }
    };

    fetchAllProducts();
  }, [sendRequest]);

  const searchProduct = useCallback((keyword) => {
    console.log(`On search ${keyword}`);

    setFilteredProducts(
      loadedProducts.filter(product =>
        product.name.includes(keyword)
      )
    );
  }, [loadedProducts]);

  return (
    <React.Fragment>
      <div className="products-container">
        <ProductsSearchBar onSearch={searchProduct} />
        <ProductsList items={filteredProducts} />
      </div>
    </React.Fragment>
  );
};

export default Products;
