import { TABLE_ROW } from '../actions';

const TableReducer = (state = [], action) =>{
  switch (action.type){
    case TABLE_ROW:
      const data = action.payload.data
      if(data){
        const newRow = {
          currentLocation: action.payload.config.url.includes('?lat='), 
          //is query from geolocation or not?
          name: data.city.name,
          temp: data.list.map((time)=> time.main.temp),
          humidity: data.list.map((time)=> time.main.humidity),
          pressure: data.list.map((time)=> time.main.pressure)
        }
        return [newRow, ...state];
      }
      return state;
      
    default:
      return state;
  }
    
};

export default TableReducer;