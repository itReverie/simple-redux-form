import configApi from '../config/';
import Giphy from '../model/giphy';

const giphyApi ={
  
  config: Object.assign({},configApi.giphy),

  requestSearch(searchTerm,numberOfResults=-1,offset=0){     
    //Validating data
    if(searchTerm.trim()===""){
      return new Promise((resolve, reject) => {
                          reject({message:'Error API'});
                          })
    }
    let apiHost=`${this.config.endpoint}${this.config.token}&q=${searchTerm}`;
    if(numberOfResults>-1){
        apiHost=`${apiHost}&limit=${numberOfResults}`;
    }
    if(offset>0){
      apiHost=`${apiHost}&offset=${offset}`;
    }

    //Calling the API
    return new Promise((resolve, reject) => {
      fetch(apiHost)
      .then(res => {
          if(res.status===200){
            resolve(res.json());
          }
          else{
            //TODO: If I have more time. This error should be logged in the server to have more information about what went wrong.
            //To the client in the fontend we need to apologize.
            reject({message: 'Error API'})
          }
        })
        .catch(error => {
            //TODO: If I have more time. This error should be logged in the server to have more information about what went wrong.
            //To the client in the fontend we need to apologize.
            reject({message: 'Error API'})
         })
    });
  },

  //The main point of this function is to normalize the data and make the gif object simpler to avoid big object with unnecesary data.
  //Sometimes is better not to touch the API data but in this case it will be normalized.
  searchGiphys(searchTerm,numberOfResults=-1,offset=0){

      //Validating data
      if(searchTerm.trim()===""){
        return new Promise((resolve, reject) => {
                            reject({message:'Error API'});
                            })
      }

      return new Promise((resolve, reject) => {
        this.requestSearch(searchTerm,numberOfResults,offset)
        .then(result=> {
          let giphys={};
          //Normalizing and having our own object Giphy with just the data we need. 
          console.log(result.data);
          if(result.data && result.data.length>0){
            giphys = result.data.reduce((acc, item) => ({
              ...acc,
              [item.id]: Object.assign({}, item, new Giphy(item.id, item.images.fixed_width))
            }), {});
            resolve(giphys);
          }
          else{
            reject({message: 'Error API'});
          }
        })
        .catch(error => {
          reject(error)});
      });
  }

}

export default giphyApi;
