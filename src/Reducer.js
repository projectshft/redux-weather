const mockState = {
  city: 'Dover', 
  temperature: 97,
  pressure: 70,
  humidity: 60
}

export const inputClick = {
  type: 'INPUT_CLICK'
}

const Reducer = (state = mockState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default Reducer