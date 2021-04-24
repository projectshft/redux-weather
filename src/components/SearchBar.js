import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { fetchNewTableRow, accessLocation } from '../actions';


export default function SearchBar () {
  const [query, setQuery] = useState('');
  const [locationAccess, setLocationAccess] = useState(false)
  const[ dupeSearchMessage, setDupeSearchMessage] = useState(false);
  const tableData = useSelector(state => state.table)
  const dispatch = useDispatch();

  const trackQuery = (e) => {
    setQuery(e.target.value);
  }

  const submitQuery = () => {
    const duplicateQuery = tableData.map((city) => city.name).includes(formatQuery(query))
    if (!duplicateQuery) {
      setDupeSearchMessage(false);
      dispatch(fetchNewTableRow(query));
    };
    if(duplicateQuery) {setDupeSearchMessage(true)}
  }

  const formatQuery = (rawQuery) => {
    const input = rawQuery.split(' ');
    const output = input.map((word) =>{
      let upper = word[0].toUpperCase();
      let lower = word.slice(1).toLowerCase();
      return upper+lower;
    })
    return output.join(' ');
  }

  const submitLocation = () => {
    if (locationAccess === false){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(accessLocation(position.coords.latitude, position.coords.longitude))
          setLocationAccess(true);
        }
      )
    }
  }
  
  return (
    <>
      <div className="row">
        <div className="col-sm-6 offset-md-3">
          <input placeholder="get a five-day forecast in your favorite cities" onChange={trackQuery}></input>
          <button className="btn btn-primary btn-sm" onClick={submitQuery}>Submit</button>
          <button className={`btn btn-sm ${locationAccess ? 'btn-success' : 'btn-primary'}`} onClick={submitLocation}>{locationAccess ? 'Current Location Displayed' : 'Get Current Location'}</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 offset-md-3'>
          <p style={{color: "red"}}>{dupeSearchMessage ? 'that location is already displayed below, choose another' : null}</p>
        </div>
      </div>
    </>
  )
}