import axios from 'axios'

export const POST_CATEGORY_SUCCESS = "POST_CATEGORY_SUCCESS";
export const POST_CATEGORY_FAILURE = "POST_CATEGORY_FAILURE";
export const postCategory = () => {

    return (dispatch) => {
        axios.get(`http://localhost:3001/category/`)
            .then(category => {
                dispatch(postCategorySuccess(category.data))
            })
            .catch(error => {
                dispatch(postCategoryFailure(error))
            })
    }
}

export const postCategorySuccess = (category) => {
    return {
        type: POST_CATEGORY_SUCCESS,
        payload: category
    }
}
export const postCategoryFailure = (error) => {
    return {
        type: POST_CATEGORY_FAILURE,
        payload: error
    }
}