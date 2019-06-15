import { 
    FETCH_PROFILE_DATA_STARTED,
    FETCH_PROFILE_DATA_SUCCESS,
    FETCH_PROFILE_DATA_FAILED
 } from '../actions/profile-search-action-constants';
 import profileTransformer from '../transformers/profile-transformer'
 

const initialState = {
    loading: false,
    error: null,
    profile: {
        name: "Data not loaded...",
        trophies: "Data not loaded...",
        leagueRank: "Data not loaded...",
        arena: {
            name: "Loading...",
            arena: "Loading...",
            trophyLimit: 0
        },
        clan: {
            name: "Loading...",
            role: "Loading...",
            donations: "Loading...",
            tag: "Loading...",
            badge: {
                image: "Loading..."
            }
        },
    }
};

const ClashRoyaleProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE_DATA_STARTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PROFILE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                profile: profileTransformer(action.payload),
            };
        case FETCH_PROFILE_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error:action.payload.error,
            }
        default:
            return state;
    }
};

export default ClashRoyaleProfileReducer;