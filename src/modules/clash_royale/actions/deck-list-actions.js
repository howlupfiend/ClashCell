import axios from 'axios';
import { FETCH_DECK_DATA_STARTED, FETCH_DECK_DATA_SUCCESS, FETCH_DECK_DATA_FAILED} from './deck-list-action-constants'

export const fetchPopularDecks = () => {
    const apiUrl = 'https://api.royaleapi.com/popular/decks';

    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY2NCwiaWRlbiI6IjE4OTY4NjUxODA2NjA1MzEyMCIsIm1kIjp7fSwidHMiOjE1NjAxMDc3MTQwMTR9.uj9Zxixf_wqnUrP37yf3R44czNUb5nTNeK3BMqQmQQg";

    return dispatch => new Promise((resolve, reject) => {
        dispatch(fetchDeckDataStarted());
        axios.get(apiUrl, {headers: {"Authorization" : `${apiToken}`}})
            .then((response) => {
                dispatch(fetchDeckDataSuccess(response.data));
                resolve(response);
            })
            .catch((err) => {
                dispatch(fetch)
                reject(err)
            });
    });
};

export const fetchDeckDataStarted = () => ({
    type: FETCH_DECK_DATA_STARTED,
});

export const fetchDeckDataSuccess = data => ({
    type: FETCH_DECK_DATA_SUCCESS,
    payload: data
});

export const fetchDeckDataFailed = data => ({
    type: FETCH_DECK_DATA_FAILED,
    payload: data
});