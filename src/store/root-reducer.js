import { combineReducers } from '@reduxjs/toolkit';
import {geojsonReducer} from './geojson/geojsonReducer'


export const rootReducer = combineReducers({
    geoJson: geojsonReducer,
});