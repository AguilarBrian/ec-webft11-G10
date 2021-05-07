import { 
  SET_PRODUCT_IMG, POST_PRODUCTS_SUCCESS, POST_PRODUCTS_FAILURE,
  SEARCH_PRODUCT_FAILURE,SEARCH_PRODUCT_REQUEST,SEARCH_PRODUCT_SUCCESS,

} from './product.actions';

const initialState = {
  products: [],
  productError: "",
  productImg: "no tiene",
  Error:"",
  Loading:"",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        Loading: true
      }
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        Loading: false,
        searchResults: action.payload
      }
    case SEARCH_PRODUCT_FAILURE:
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
    default:
      return state;
  }
}


export default productReducer;