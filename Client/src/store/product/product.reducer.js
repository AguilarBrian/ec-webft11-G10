import {SET_PRODUCT_IMG, POST_PRODUCTS_SUCCESS, POST_PRODUCTS_FAILURE,SEARCH_PRODUCT_FAILURE,SEARCH_PRODUCT_REQUEST,SEARCH_PRODUCT_SUCCESS,GET_PRODUCTS} from './product.actions';

import {SEARCH_PRODUCT_REQUEST_CATEGOIES,SEARCH_PRODUCT_SUCCESS_CATEGOIES,SEARCH_PRODUCT_FAILURE_CATEGOIES} from '../category/category.actions' 

const initialState = {
  products: [],
  productError: "",
  productImg: "no tiene",
  Error:"",
  Loading:"",
  searchResults:[]

};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT_REQUEST || SEARCH_PRODUCT_REQUEST_CATEGOIES:
      return {
        ...state,
        Loading: true
      }
    case SEARCH_PRODUCT_SUCCESS || SEARCH_PRODUCT_SUCCESS_CATEGOIES:
      return {
        ...state,
        Loading: false,
        searchResults: action.payload
      }
    case SEARCH_PRODUCT_FAILURE || SEARCH_PRODUCT_FAILURE_CATEGOIES:
      return {
        ...state,
        Error: 'error 404',
        Loading: false
      }
    case SET_PRODUCT_IMG:
      return {
        ...state,
        productImg: action.payload

      }
    case POST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case POST_PRODUCTS_FAILURE:
      return {
        ...state,
        productError: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}


export default productReducer;