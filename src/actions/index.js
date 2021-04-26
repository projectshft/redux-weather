import axios from 'axios'

export const  FETCH_CITY = "FETCH_CITY"; 
export const  CITY_NAME = "CITY_NAME";

// async function thats getting called in search.js then completing from there
export const weatherApi = async (query) => {

  try{
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=fd83bef0eb12c19f364bcd16ae1d8216`);

    return data;
  }
  catch(e){
  
    return e;
    
  }
}




