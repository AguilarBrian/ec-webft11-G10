import { SET_PRODUCT_IMG,POST_PRODUCTS_SUCCESS, POST_PRODUCTS_FAILURE } from './product.actions';

const initialState = {
  products: [],
  productError: "",
  productImg:"no tiene"
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_IMG:
      return{
        ...state,
        productImg:action.payload
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
    default:
      return state;
  }
}


export default productReducer;