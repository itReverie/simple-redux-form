import * as types from './actionTypes';
import giphyApi from '../api/';

export function loadGifs(){
    return function (dispatch){
        return giphyApi.searchGiphys('happy')
        .then(gifs => {
          dispatch(loadGifsAction(gifs));
        })
        .catch(error => {
            console.log(error);
          //dispatch(loadError(error));
        });
    }
}

export function loadGifsAction(gifs)
{
  return {type : types.LOAD, gifs};
}