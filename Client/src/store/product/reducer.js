

const initialState = {
    state:""
  };

  function productReducer(state = initialState, action) {
    if (action.type === "x"){
      return {
        state: action.payload
      }
    }
    return state;
  }
  
  export default productReducer;