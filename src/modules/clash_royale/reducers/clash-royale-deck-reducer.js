import { 
    FETCH_DECK_DATA_FAILED,
    FETCH_DECK_DATA_SUCCESS,
    FETCH_DECK_DATA_SUCCESS
 } from '../actions/deck-list-action-constants';
import deckTransformer from '../transformers/deck-transformer'

const initialState = {
    loading: false,
    error: null,
    decks: {
        cards: []
    }
};

const ClashRoyaleDeckReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DECK_DATA_STARTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DECK_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                decks: deckTransformer(action.payload),
            };
        case FETCH_DECK_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error:action.payload.error,
            }
        default:
            return state;
    }
};

export default ClashRoyaleDeckReducer;