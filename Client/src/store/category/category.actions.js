import axios from 'axios'

export const GET_CATEGORY = "GET_CATEGORY";
export const POST_ADD_CATEGORY = 'POST_ADD_CATEGORY'

export const getCategory = () => dispatch => {
    let URL = "http://localhost:3001/products/category/get"
    axios.get(URL)
        .then(res => {
            dispatch({ type: 'GET_CATEGORY', payload: res.data })
        }).catch(err => {
            dispatch({ type: 'GET_CATEGORY', payload: err })
        })
}

export const postAddCategory = (category) => dispatch => {
    let URL = `http://localhost:3001/products/category`
    axios.post(URL, category, {headers: {'Content-Type': 'application/json'}})
    .then(res => {
        dispatch({ type: 'POST_ADD_CATEGORY', payload: res.status })
    }).catch(err => {
        dispatch({ type: 'POST_ADD_CATEGORY', payload: err })
    })
}
