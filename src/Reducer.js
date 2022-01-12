// const mockState = {
//   city: 'Dover', 
//   temperature: 97,
//   pressure: 70,
//   humidity: 60
// }

const initialState = {
  statesList: [],
  searchTerm: ''
}


const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_CLICK':
      return {
        ...state,
        input: state.searchTerm + action.payload
      }
    default:
      return state;
  }
}

export default Reducer