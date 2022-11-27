import * as actions from '.actionTypes'

export const createItem = (payload) => ({
  type: actions.ADD_ITEM,
  payload,
});

export const deleteItem = (id) => ({
  type: actions.DELETE_ITEM,
  payload: id
});

export const fetchItems = () => ({
  type: actions.FETCH,
  });


