import { combineReducers } from 'redux';
import listReducer from './listReducer';
import isFavoriteReducer from './favoritesReducer';

export default combineReducers({
    listReducer,
    isFavoriteReducer
})