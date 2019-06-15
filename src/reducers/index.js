import { combineReducers } from 'redux';
import ClashRoyaleProfileReducer from '../modules/clash_royale/reducers/clash-royale-profile-reducer'
import ClashRoyaleDeckReducer from '../modules/clash_royale/reducers/clash-royale-deck-reducer'

export default combineReducers({
    ClashRoyaleProfileReducer,
    ClashRoyaleDeckReducer
})