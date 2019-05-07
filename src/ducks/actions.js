const products = '@@products/';
const product = '@@product/';

export const FETCH_PRODUCTS_REQUEST = `${products}FETCH_REQUEST`;
export const FETCH_PRODUCTS_SUCCESS = `${products}FETCH_SUCCESS`;
export const FETCH_PRODUCTS_FAILURE = `${products}FETCH_FAILURE`;
export const CHANGE_SEARCH_VALUE = `${products}CHANGE_SEARCH_VALUE}`

export const GET_PRODUCT_REQUEST = `${product}GET_REQUEST`;
export const GET_PRODUCT_SUCCESS = `${product}GET_SUCCESS`;
export const GET_PRODUCT_FAILURE = `${product}GET_FAILURE`;

export const fetchProducts = () => ({ 
  type: FETCH_PRODUCTS_REQUEST, 
});

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: value,
});

export const getProduct = (id) => ({ 
  type: GET_PRODUCT_REQUEST, 
  id, 
});
