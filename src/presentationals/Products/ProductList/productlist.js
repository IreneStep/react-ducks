import React from 'react';
import s from '../ProductList/ProductList.module.css';
import ProductItem from '../ProductItem/productitem';

const ProductList = (props) => {
  const getProducts = (products, searchValue) =>
    products.map(product => 
      searchValue.length === 0 || 
      (product.theme !== null && product.theme.toLowerCase().includes(searchValue.toLowerCase())) ?
        <ProductItem 
          product={ product }
        />
        : null
    );

    return (
      <div className={ s.content__box } >
        { getProducts(props.products, props.searchValue) }
      </div> 
    );
}

export default ProductList;