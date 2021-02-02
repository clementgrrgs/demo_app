import { FETCH_MOVIE } from "../actions/types";

export default function movieReducer (state = null, action){
    switch (action.type) {
        case FETCH_MOVIE :
            return action.payload || false;
        default:
            return state;
    }
} 