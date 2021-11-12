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


/*
const DEFAULT_STATE = [];

const citiesReducer = function(state = DEFAULT_STATE, action) {    
    switch (action.type) {
        case FETCH_CITY:       
        
        return action.payload.data   
        // return action.payload.data.list.slice(0, 5) 
            
        default:
            return state
    }    
}
*/

/*
From Peter Elbaum to Everyone:  06:33 PM
[…state, yourData]
[[], [], [], []]
Const cities = useState(state => state.cities)
*/
