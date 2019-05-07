import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CHANGE_SEARCH_VALUE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../ducks/actions';

const initialState = {
  productList: [],
  searchValue: "",
  currentProduct: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
          return {
              ...state,
              productList: [],
              searchValue: "",
          };

      case FETCH_PRODUCTS_SUCCESS:
          return {
              ...state,
              productList: action.payload,
          };

      case FETCH_PRODUCTS_FAILURE:
          return {
              ...state,
          };
      
      case CHANGE_SEARCH_VALUE:
          return {
              ...state,
              searchValue: action.payload,
          };

      case GET_PRODUCT_REQUEST:
          return {
              ...state,
              currentProduct: null,
              searchValue: "",
          };
          
      case GET_PRODUCT_SUCCESS:
          return {
              ...state,
              currentProduct: action.payload,
          };
      case GET_PRODUCT_FAILURE:
          return {
              ...state,
          };
      
      default:
          return state;
  }
};