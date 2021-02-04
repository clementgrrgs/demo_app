import { FETCH_MOVIE } from './types';

/**
* Get the objet movie and build the action FETCH_MOVIE for reducers
* @param {object} movie - Contains all the movie informations
*/
export const fetchMovie = movie =>  ({
    type : FETCH_MOVIE, 
    payload : movie
});