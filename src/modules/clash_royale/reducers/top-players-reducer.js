import { 
    FETCH_TOP_PLAYERS_DATA_STARTED,
    FETCH_TOP_PLAYERS_DATA_SUCCESS,
    FETCH_TOP_PLAYERS_DATA_FAILED
 } from '../actions/top-players-constants';

 

const initialState = {
    loading: false,
    error: null,
    topPlayers: []
};

const ClashRoyaleTopPlayersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_PLAYERS_DATA_STARTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_TOP_PLAYERS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                topPlayers: action.payload.splice(0,10),
            };  
        case FETCH_TOP_PLAYERS_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error:action.payload.error,
            }
        default:
            return state;
    }
};

export default ClashRoyaleTopPlayersReducer;