import EXAMPLE_ACTION from './reducers-index'

const testReducer = (state = false, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return true;
    default:
      return state;
  }
};

export default testReducer;