import { combineReducers } from "redux";
import productsReducers from "./product/reducer";
import categoryReducers from "./category/category.reducer"
export default combineReducers({
  productsReducers,
  categoryReducers,
  
});
