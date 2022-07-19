import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const schema = yup.object({
  city: yup.string().required(),
}).required();

const Search = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  // const onSubmit = data => console.log(data);

  const weatherGeoSearch = (city) => {
    const url = 'http://api.openweathermap.org/geo/1.0/direct?';
  
    const params = {
      q: city,
      appid: API_KEY,
      limit: 1
    };
  
    axios
      .get(url, { params: params })
      .then(response => {
        const { lat, lon } = response.data[0];
        weatherForecastSearch(lat, lon);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const weatherForecastSearch = (lat, lon) => {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?';
  
    const params = {
      lat: lat,
      lon: lon,
      appid: API_KEY,
      units: 'imperial'
    };
  
    axios
      .get(url, { params: params })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onSubmit = (data) => {
    // e.preventDefault();
    weatherGeoSearch(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row gx-2 mb-4">
      <div className='col'>
        <input
          {...register("city", {required: true})}
          className='form-control' 
          placeholder="Get a five-day forecast in your favorite cities"
        ></input>
        {/* {errors.city?.message} */}
        {errors.city?.type === "required" && <span>This is required</span>}
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary px-4">Search</button>
      </div>
    </form>
  )
}

export default Search;