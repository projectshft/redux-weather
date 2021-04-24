import { SET_DEFAULT } from '../actions';

const DefaultReducer = (state = null, action) =>{
  switch (action.type){
    case SET_DEFAULT:
      const data = action.payload
      localStorage.setItem('city', data)
      
      return data;

    default:
      return state;
  }
    
};

export default DefaultReducer;