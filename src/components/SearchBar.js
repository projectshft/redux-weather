import { useState } from "react";
import axios from 'axios';
import { FetchPosts } from '../actions/index'

const title = 'Hartford';

const apiCall = () => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${title}&cnt=40&appid=79a5ea387ec460414cf26ee9382db272&units=imperial`);
  console.log(request, 'request');
  return request;
}


const SearchBar = () => {
  const [title, setTitle] = useState("");


  const handleFormSubmit = (e) => {
    e.preventDefault();
    FetchPosts();
    console.log(apiCall(), 'apiCall');
    return {title};
  };
console.log({title}, 'title search')

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Search a City</label>
        <input
          className="form-control"
          placeholder='Get a 5 day forecast of your favorite city'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
};

    export default SearchBar;