import { FETCH_USER } from "../actions/types";
export default function (state = null, action) {
    
    switch (action.type) {
        case FETCH_USER:
            // tricky tech: '' || false => false, 'tim' || false => 'tim'
            return action.payload || false; 
        default:
            return state;
    }
} 