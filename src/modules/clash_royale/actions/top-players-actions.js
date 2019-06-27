import axios from 'axios';
import { FETCH_TOP_PLAYERS_DATA_STARTED, FETCH_TOP_PLAYERS_DATA_SUCCESS, FETCH_TOP_PLAYERS_DATA_FAILED} from './top-players-constants'

export const fetchTopPlayersData = (location) => {
    const apiUrl = `https://api.royaleapi.com/top/players/${location}`;

    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY2NCwiaWRlbiI6IjE4OTY4NjUxODA2NjA1MzEyMCIsIm1kIjp7fSwidHMiOjE1NjAxMDc3MTQwMTR9.uj9Zxixf_wqnUrP37yf3R44czNUb5nTNeK3BMqQmQQg";

    return dispatch => new Promise((resolve, reject) => {
        dispatch(fetchTopPlayersDataStarted());
        axios.get(apiUrl, {headers: {"Authorization" : `${apiToken}`}})
            .then((response) => {
                dispatch(fetchTopPlayersDataSuccess(response.data));
                resolve(response);
            })
            .catch((err) => {
                dispatch(fetch)
                reject(err)
            });
    });
};

export const fetchTopPlayersDataStarted = () => ({
    type: FETCH_TOP_PLAYERS_DATA_STARTED,
});

export const fetchTopPlayersDataSuccess = data => ({
    type: FETCH_TOP_PLAYERS_DATA_SUCCESS,
    payload: data
});

export const fetchTopPlayersDataFailed = data => ({
    type: FETCH_TOP_PLAYERS_DATA_FAILED,
    payload: data
});

