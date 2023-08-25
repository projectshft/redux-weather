/* eslint-disable default-param-last */
import { normalize, schema } from 'normalizr';
import _ from 'lodash';
import { FETCH_LOCATION } from '../actions';

const locationSchema = new schema.Entity('locations', undefined, {
  idAttribute: (value) => value.city.id
});

const DEFAULT_STATE = {
  entries: {},
  order: []
};

const locationsReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_LOCATION: {
      if (!action.payload) {
        alert(
          'Sorry, there was a problem getting data for that city. Please try again.'
        );
        return state;
      }

      const normalizedLocation = normalize(action.payload.data, locationSchema);

      return {
        entries: {
          ...normalizedLocation.entities.locations,
          ...state.entries
        },
        order: _.union([normalizedLocation.result], [...state.order])
      };
    }
    default:
      return state;
  }
};

export default locationsReducer;
