
import { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";

import fetchWeatherData from '../Actions';

const Input = () => {


  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState();

  const inputRef = useRef();

  const changeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  const clickHandler = useCallback(() => {
    dispatch(fetchWeatherData(searchTerm));
    inputRef.current.value = '';
  }, [dispatch, searchTerm]) 


  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      clickHandler();
      inputRef.current.value = '';
    }
  }



  return (
    <div className="container-fluid">
      <form>
      <input 
        ref={inputRef}
        id="input-box" 
        type="text" 
        placeholder="Enter City Name..." 
        onChange={changeHandler} 
        onKeyDown={enterHandler}
      ></input>
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={clickHandler}
      >Submit</button>
      </form>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-3">City</div>
          <div className="col-3">Temperature (F)</div>
          <div className="col-3">Pressure (hPa)</div>
          <div className="col-3">Humidity (%)</div>
        </div>
        <div>
        </div>
      </div>
    </div>
    
  )
}

export default Input