import { ACCESS_LOCATION } from '../actions';

const LocationReducer = (state = {}, action) =>{
  switch (action.type){
    case ACCESS_LOCATION:
      const data = action.payload.data
      const newLocation = {
        name: data.city.name,
        temp: data.list.map((time)=> time.main.temp),
        humidity: data.list.map((time)=> time.main.humidity),
        pressure: data.list.map((time)=> time.main.pressure)
      }

      console.log(newLocation);
      
      return newLocation;
    default:
      return state;
  }
    
};

export default LocationReducer;