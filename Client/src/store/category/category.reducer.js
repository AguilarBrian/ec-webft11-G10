import { GET_CATEGORY} from './category.actions';

const initialState = {
  category:''
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
}


export default categoryReducer;