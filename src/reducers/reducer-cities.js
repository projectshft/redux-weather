import { FETCH_CITY } from "../actions";
import _ from 'lodash';

const citiesReducer = function(state = [], action) {  
switch (action.type) {   
    case FETCH_CITY:       
        
        return  [...state, action.payload.data]
        
    default:
        return state;
} 
}    

export default citiesReducer;


