import { FETCH_MOVIE } from './types';

export const fetchMovie = movie =>  ({
    type : FETCH_MOVIE, 
    payload : movie
});