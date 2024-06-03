import React, { useState, useEffect } from 'react';

import ProductsList from '../components/ProductsList';
import { useHttpClient } from '../../customHooks/http-hook';
import ProductsSearchBar from '../components/ProductsSearchBar';

const Products = () => {
  const [ loadedProducts, setLoadedProducts ] = useState([]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/products'
        );

        console.log(responseData);
        setLoadedProducts(responseData.products);
      } catch (err) {}
    };

    fetchAllProducts();
  }, [sendRequest]);


  return (
    <React.Fragment>
      <ProductsSearchBar />
      <ProductsList items={loadedProducts} />
    </React.Fragment>
  );
};

export default Products;
