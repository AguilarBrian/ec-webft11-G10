import { POST_PRODUCTS_SUCCESS, POST_PRODUCTS_FAILURE } from './product.actions';

const initialState = {
  products: [],
  productError: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
}


export default productReducer;