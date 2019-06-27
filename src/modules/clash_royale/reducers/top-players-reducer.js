import { 
    FETCH_TOP_PLAYERS_DATA_STARTED,
    FETCH_TOP_PLAYERS_DATA_SUCCESS,
    FETCH_TOP_PLAYERS_DATA_FAILED
 } from '../actions/top-players-constants';
 import topPlayerTransformer from '../transformers/top-players-transformer'
 

const initialState = {
    loading: false,
    error: null,
    players: []
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
                profile: topPlayerTransformer(action.payload),
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