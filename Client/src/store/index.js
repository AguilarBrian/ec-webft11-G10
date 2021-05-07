import { combineReducers } from "redux";
import productsReducers from "./product/product.reducer";
import categoryReducers from "./category/category.reducer"

export default combineReducers({
  productReducer,
  categoryReducer,
});
