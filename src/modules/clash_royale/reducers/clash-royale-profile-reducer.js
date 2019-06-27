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
        name: "",
        trophies: "",
        leagueRank: "",
        arena: {
            name: "",
            arena: "",
            trophyLimit: 0
        },
        clan: {
            name: "",
            role: "",
            donations: "",
            tag: "",
            badge: {
                image: "loading"
            }
        },
        games: {
            total: 0,
            tournamentGames: 0,
            wins: 0,
            warDayWins: 0,
            winsPercent: 0,
            losses: 0,
            draws: 0,
        },
        leagueStatistics: {
            currentSeason: {
                trophies: 0,
                bestTrophies: 0
            }
        },
        currentDeck: []
    },
    searchProfile: {
        name: "",
        trophies: "",
        leagueRank: "",
        arena: {
            name: "",
            arena: "",
            trophyLimit: 0
        },
        clan: {
            name: "",
            role: "",
            donations: "",
            tag: "",
            badge: {
                image: "loading"
            }
        },
        games: {
            total: 0,
            tournamentGames: 0,
            wins: 0,
            warDayWins: 0,
            winsPercent: 0,
            losses: 0,
            draws: 0,
        },
        leagueStatistics: {
            currentSeason: {
                trophies: 0,
                bestTrophies: 0
            }
        },
        currentDeck: []
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
        case "FETCH_SEARCH_PROFILE_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                searchProfile: profileTransformer(action.payload),
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