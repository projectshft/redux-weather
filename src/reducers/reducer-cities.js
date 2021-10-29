import { normalize, schema } from 'normalizr';
import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST, FETCH_CITY } from "../actions";
import _ from 'lodash';

const citiesSchema = new schema.Entity('cities', undefined, {
    idAttribute: (value) => value._id
});

const DEFAULT_STATE = {
    entries: {},
    order: []
};

const citiesReducer = function(state = [], action) {
    switch (action.type) {
        case FETCH_CITY:
            const normalizedResults = normalize(action.payload.data, [citiesSchema])

            return {
                entries: normalizedResults.entries.cities,
                order: normalizedResults.result
            }

    }
    return (state);
}

export default citiesReducer;