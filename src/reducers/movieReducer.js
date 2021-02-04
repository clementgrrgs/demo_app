import { FETCH_MOVIE } from "../actions/types";


/**
* Change the Redux Store in function of action
* @param {object} state - Current state of the Redux Store
* @param {object} action - Action will determine how to change the Redux Store
*/
export default function movieReducer (state = null, action){
    switch (action.type) {
        case FETCH_MOVIE :
            return action.payload || false;
        default:
            return state;
    }
} 