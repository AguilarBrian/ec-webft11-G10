import {POST_SHIFT} from "./action";

const initialState = {
    state:""
  };

  function rootReducer(state = initialState, action) {
    if (action.type === POST_SHIFT){
      return {
        state: action.payload
      }
    }
    return state;
  }
  
  export default rootReducer;