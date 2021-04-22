import { TABLE_ROW } from '../actions';


const TableReducer = (state = [], action) =>{
  switch (action.type){
    case TABLE_ROW:
      const data = action.payload.data
      const newRow = {
        name: data.city.name,
        temp: data.list.map((time)=> time.main.temp),
        humidity: data.list.map((time)=> time.main.humidity),
        pressure: data.list.map((time)=> time.main.pressure)
      }
      
      return [newRow, ...state];
    default:
      return state;
  }
    
};

export default TableReducer;