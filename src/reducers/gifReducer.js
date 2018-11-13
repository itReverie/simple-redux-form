import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function gifReducer(state = initialState.gifs,
                                   action){
    switch(action.type){
        case types.LOAD:
         return  action.gifs;
        case types.ADD:
         return  state;
        case types.REMOVE:
         return  state;
        default:
         return state;
    }
}