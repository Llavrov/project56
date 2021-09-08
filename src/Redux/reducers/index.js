import {combineReducers } from 'redux';
import photos from './photos';
import filters from "./filters";

const rootReducer = combineReducers({
    photos: photos,
    filters: filters,
    // openCard: openCard,
});

export default rootReducer;