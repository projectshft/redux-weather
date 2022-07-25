/* eslint-disable default-param-last */
import { API_ERROR } from '../actions';

export const apiError = (state = [], action) => {
  const { type, error } = action;

  switch (type) {
    case API_ERROR:
      return state;

    default:
      return state;
  }
};
