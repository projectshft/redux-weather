import { normalize, schema } from 'normalizr';
import { FETCH_CITY } from "../actions";
import _ from 'lodash';

/*
const citiesSchema = new schema.Entity('cities', undefined, {
    idAttribute: (value) => value._id
});
*/

const DEFAULT_STATE = [{}];


const citiesReducer = function(state = DEFAULT_STATE, action) {    
    switch (action.type) {
        case FETCH_CITY: 
            return action.payload.data  
        default:
            return state
    }
    
}

export default citiesReducer;

//const normalizedResults = normalize(action.payload.data, [citiesSchema])