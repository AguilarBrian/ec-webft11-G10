import axios from 'axios'

export const POST_CATEGORY_SUCCESS = "POST_CATEGORY_SUCCESS";
export const POST_CATEGORY_FAILURE = "POST_CATEGORY_FAILURE";
const serverUrl="http://localhost:3001"

export const postCategory = () => {

    return (dispatch) => {
const serverUrl="http://localhost:3001"
        axios.get(`${serverUrl}/category/`)
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