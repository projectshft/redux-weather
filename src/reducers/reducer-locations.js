import { normalize, schema } from 'normalizr';
import _ from 'lodash';
import { FETCH_COORDINATES } from "../actions";

const locationSchema = new schema.Entity('locations', undefined, {
  idAttribute: (value) => value.name
});

const DEFAULT_STATE = {
  entries: {},
  order: []
}

const locationsReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_COORDINATES:
      const normalizedLocation = normalize(action.payload.data[0], locationSchema);

      return {
        entries: { ...normalizedLocation.entities.locations, ...state.entries },
        order: _.union([normalizedLocation.result], [...state.order])
      }
    default:
      return state;
  }
};

export default locationsReducer;