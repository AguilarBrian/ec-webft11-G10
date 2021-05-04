import axios from 'axios'

export const GET_SHIFTS = 'GET_SHIFTS'

export const getShifts = () => dispatch => {
    let URL = `http://192.168.0.209:5000/peluAPP/turnos`
    axios.get(URL)
        .then(res => {
            dispatch({ type: 'GET_SHIFTS', payload: res.data})
        }).catch(err => {
            dispatch({ type: 'GET_SHIFTS', payload: err })
        })
}