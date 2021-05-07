import { GET_CATEGORY,POST_ADD_CATEGORY} from './category.actions';

const initialState = {
  category:'',
  postState: ''
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        category: action.payload
      };
    case POST_ADD_CATEGORY:
      return {
        postState: action.payload
      };
    default:
      return state;
  }
}


export default categoryReducer;