// import React, { useState } from 'react';
// import { getWeather } from '../actions/get-weather';
// // import { useDispatch } from 'react-redux';

// const SearchBar = () => {

// //sets the state of the search with the text in the input field
// const [search, setSearch] = useState('');
// // const dispatch = useDispatch();

// const handleChange = (event) => {
//   setSearch(event.target.value);
// }


// const handleSearch = (event) => {
//   event.preventDefault();
//   console.log(search); 
//   // dispatch(getWeather(search));
//   getWeather(search);
//   setSearch('');

// }


// //displays the search bar with search button 
// return (
// <div className="input-group mb-3 w-50 container-fluid search">
//   <input id="input" type="text" className="form-control search" placeholder="Enter a city" onChange={handleChange} value={search} />
//   <div className="input-group-append search">
//     <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
//   </div>
// </div>
//     )
// }

// export default SearchBar;













// import React, { useState } from 'react';
// import { getWeather } from '../actions/get-weather';
// import { useDispatch } from 'react-redux';

// const SearchBar = () => {

// //sets the state of the search with the text in the input field
// const [search, setSearch] = useState('');
// const dispatch = useDispatch();

// const handleChange = (event) => {
//   setSearch(event.target.value);
// }


// const handleSearch = (event) => {
//   event.preventDefault();
//   console.log(search); 
//   dispatch(getWeather(search));
//   // getWeather(search);
//   setSearch('');

// }


// //displays the search bar with search button 
// return (
// <div className="input-group mb-3 w-50 container-fluid search">
//   <input id="input" type="text" className="form-control search" placeholder="Enter a city" onChange={handleChange} value={search} />
//   <div className="input-group-append search">
//     {/* <button className="btn btn-primary" type="button" onClick={() => dispatch(getWeather(search))}>Search</button> */}
//     <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
//   </div>
// </div>
//     )
// }

// export default SearchBar;












import React, { useState, useEffect } from 'react';
import { getWeather } from '../actions/get-weather';
import { useDispatch } from 'react-redux';

const SearchBar = (props) => {

//sets the state of the search with the text in the input field
const [search, setSearch] = useState('');
const dispatch = useDispatch();



const handleChange = (event) => {
  setSearch(event.target.value);
}

// useEffect(() => {
//   props.getWeather();
// }, []);

const handleSearch = (event) => {
  event.preventDefault();
  dispatch(getWeather(search));
  // getWeather(search);
  setSearch('');
}


//displays the search bar with search button 
return (
<div className="input-group mb-3 w-50 container-fluid search">
  <input id="input" type="text" className="form-control search" placeholder="Enter a city" onChange={handleChange} value={search} />
  <div className="input-group-append search">
    {/* <button className="btn btn-primary" type="button" onClick={() => dispatch(getWeather(search))}>Search</button> */}
    <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
  </div>
</div>
    )
}

export default SearchBar;