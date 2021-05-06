import { POST_CATEGORY_SUCCESS, POST_CATEGORY_FAILURE } from './category.actions';

const initialState = {
    category: [],
    categoryError: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CATEGORY_SUCCESS:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case POST_CATEGORY_FAILURE:
      return {
        ...state,
        categoryError: action.payload,
      };
    default:
      return state;
  }
}


export default categoryReducer;