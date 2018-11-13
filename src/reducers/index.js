import {combineReducers} from 'redux';
import gifs from './gifReducer';

const rootReducer= combineReducers({
    gifs
});

export default rootReducer;