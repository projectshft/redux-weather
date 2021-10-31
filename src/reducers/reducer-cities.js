import { normalize, schema } from 'normalizr';
import { FETCH_CITY, FETCH_CITIES } from "../actions";
import _ from 'lodash';

/*
const citiesSchema = new schema.Entity('cities', undefined, {
    idAttribute: (value) => value._id
});


const DEFAULT_STATE = {
    entries: {},
    order: []
};
*/
const citiesReducer = function(state = [], action) {
    switch (action.type) {
        case FETCH_CITY: 
            return action.payload.data;  
        case FETCH_CITIES:
            return action.payload.data;  
    }
    return (state);
}

export default citiesReducer;

//const normalizedResults = normalize(action.payload.data, [citiesSchema])