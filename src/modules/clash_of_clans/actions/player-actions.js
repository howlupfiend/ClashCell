
import axios from 'axios';
import { FETCH_PLAYER_DATA_STARTED, FETCH_PLAYER_DATA_SUCCESS, FETCH_PLAYER_DATA_FAILED} from './profile-search-action-constants'

export const fetchPlayerData = (playerId) => {
    const apiUrl = `https://api.clashofclans.com/v1/players/${playerId}`;

    const apiToken = `Bearer eyJ0eXAiOiJKV1QiLCJh
                        bGciOiJIUzUxMiIsImtpZCI6I
                        jI4YTMxOGY3LTAwMDAtYTFlYi
                        03ZmExLTJjNzQzM2M2Y2NhNSJ
                        9.eyJpc3MiOiJzdXBlcmNlbGw
                        iLCJhdWQiOiJzdXBlcmNlbGw6
                        Z2FtZWFwaSIsImp0aSI6IjU1O
                        TRkNGIxLTgwYzgtNDVkZi1hM2
                        ZjLTcwM2M3YTkwNDZlMCIsIml
                        hdCI6MTU2MTQxMjg1Mywic3Vi
                        IjoiZGV2ZWxvcGVyLzAwZmFjY
                        jIzLTZhZDAtNTcyMy0wYjk0LT
                        JkN2NkODliMDk5NCIsInNjb3B
                        lcyI6WyJjbGFzaCJdLCJsaW1p
                        dHMiOlt7InRpZXIiOiJkZXZlb
                        G9wZXIvc2lsdmVyIiwidHlwZS
                        I6InRocm90dGxpbmcifSx7ImN
                        pZHJzIjpbIjUuNjQuODguMjEx
                        Il0sInR5cGUiOiJjbGllbnQif
                        V19.67DH6EzGSxo6xNtwt93kN
                        3GjJhgEzV7e8bxwrCqBLF592x
                        BXH-NMSOZh8hgiXua319X6Q32
                        -8dPtWqzrHQ9C7Q`;

    return dispatch => new Promise((resolve, reject) => {
        dispatch(fetchPlayerDataStarted());
        axios.get(apiUrl, {headers: {"Authorization" : `${apiToken}`}})
            .then((response) => {
                dispatch(fetchPlayerDataSuccess(response.data));
                resolve(response);
            })
            .catch((err) => {
                dispatch(fetch)
                reject(err)
            });
    });
};

export const fetchPlayerDataStarted = () => ({
    type: FETCH_PLAYER_DATA_STARTED,
});

export const fetchPlayerDataSuccess = data => ({
    type: FETCH_PLAYER_DATA_SUCCESS,
    payload: data
});

export const fetchPlayerDataFailed = data => ({
    type: FETCH_PLAYER_DATA_FAILED,
    payload: data
});