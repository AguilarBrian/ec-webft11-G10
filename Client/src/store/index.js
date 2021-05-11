import { combineReducers } from "redux";
import productReducer from "./product/product.reducer";
import categoryReducer from "./category/category.reducer"
import userReducer from "./user/user.reducer"

export default combineReducers({
  productReducer,
  categoryReducer,
  userReducer
});
