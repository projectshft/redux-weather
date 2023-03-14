import { FETCH_5DAY, ADD_CITY } from '../actions';

const initialState = {
  cities: [],
};

function addCityToState(state, city, data) {
  const cityData = {
    name: city,
    data: data.list,
  };

  return {
    ...state,
    cities: [...state.cities, cityData],
  };
}

function updateCityInState(state, action) {
  const cityData = {
    name: action.meta.city,
    data: action.payload.data.list,
  };

  const cityIndex = state.cities.findIndex((c) => c.name === cityData.name);

  if (cityIndex === -1) {
    return {
      ...state,
      cities: [...state.cities, cityData],
    };
  }

  const updatedCities = [...state.cities];
  updatedCities[cityIndex] = cityData;

  return {
    ...state,
    cities: updatedCities,
  };
}

// eslint-disable-next-line default-param-last
export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_5DAY:
      return updateCityInState(state, action);
    case ADD_CITY:
      return addCityToState(state, action.payload, { list: [] });
    default:
      return state;
  }
}
