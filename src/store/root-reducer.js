import { combineReducers } from '@reduxjs/toolkit';
import {geojsonReducer} from './geojson/geojsonReducer'
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
    geoJson: geojsonReducer,
     user: userReducer,
});