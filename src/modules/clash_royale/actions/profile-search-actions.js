import axios from 'axios';
import { FETCH_PROFILE_DATA_STARTED, FETCH_PROFILE_DATA_SUCCESS, FETCH_PROFILE_DATA_FAILED} from './profile-search-action-constants'

export const fetchProfileData = (profileId) => {
    const apiUrl = `https://api.royaleapi.com/player/${profileId}`;

    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY2NCwiaWRlbiI6IjE4OTY4NjUxODA2NjA1MzEyMCIsIm1kIjp7fSwidHMiOjE1NjAxMDc3MTQwMTR9.uj9Zxixf_wqnUrP37yf3R44czNUb5nTNeK3BMqQmQQg";

    return dispatch => new Promise((resolve, reject) => {
        dispatch(fetchProfileDataStarted());
        axios.get(apiUrl, {headers: {"Authentication" : `${apiToken}`}})
            .then((response) => {
                dispatch(fetchProfileDataSuccess(response.data));
                resolve(response);
            })
            .catch((err) => {
                dispatch(fetch)
                reject(err)
            });
    });
};

export const fetchProfileDataStarted = () => ({
    type: FETCH_PROFILE_DATA_STARTED,
});

export const fetchProfileDataSuccess = data => ({
    type: FETCH_PROFILE_DATA_SUCCESS,
    payload: data
});

export const fetchProfileDataFailed = data => ({
    type: FETCH_PROFILE_DATA_FAILED,
    payload: data
});