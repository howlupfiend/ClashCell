import { combineReducers } from 'redux';
import ClashRoyaleProfileReducer from '../modules/clash_royale/reducers/profile-reducer'
import ClashRoyaleDeckReducer from '../modules/clash_royale/reducers/deck-reducer'
import ClashRoyaleTopPlayersReducer from '../modules/clash_royale/reducers/top-players-reducer'


export default combineReducers({
    ClashRoyaleProfileReducer,
    ClashRoyaleDeckReducer,
    ClashRoyaleTopPlayersReducer
})