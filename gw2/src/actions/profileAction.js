import axios from 'axios';

export const FETCH_PROFILE_START = 'FETCH_PROFILE_START';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
export const fetchProfile = () => {
    return dispatch => {
        dispatch({ type: FETCH_PROFILE_START})
        axios
            .get(`https://api.covid19api.com/summary`)
            .then(res => {
                console.log('API CONSOLE LOG', res.data)
                dispatch({ type: FETCH_PROFILE_SUCCESS, payload: res})
            })
            .catch(err => dispatch({ type: FETCH_PROFILE_FAILURE, payload: console.log(err)}))
    }
}