function generateId(state) {
  const maxId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1;
}

// [ { id: 1, name: 'chicago' }, ] instead ['chicago', 'san francisco']
const cityNameReducer = (state = [], action) => {
  if (action.type === "add-city-name") {
    const { value } = action.payload;
    return [
      ...state,
      {
        id: generateId(state),
        name: value
      }
    ]
  }
  return state;
}

export default cityNameReducer;