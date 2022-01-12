const mockObject = {
  id1:  {
    city: 'Dover', 
    temperature: 97,
    pressure: 70,
    humidity: 60
  },
  id2: {
    city: 'Dover', 
    temperature: 97,
    pressure: 70,
    humidity: 60
  }
  
}

const initialState = {
  statesList: mockObject,
  searchTerm: ''
}


const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHTERM_CLICK':
      return {
        ...state,
        searchTerm: state.searchTerm + action.payload
      }
    default:
      return state;
  }
}

export default Reducer