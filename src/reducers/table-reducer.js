import { TABLE_ROW } from '../actions';

const TableReducer = (state = [], action) =>{
  switch (action.type){
    case TABLE_ROW:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
    
};

export default TableReducer;