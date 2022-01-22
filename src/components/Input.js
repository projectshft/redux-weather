
import { useState, useRef } from "react";
import { useDispatch } from "react-redux"
import { searchTermClick } from "../Actions";

const Input = () => {
  

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState();

  const inputRef = useRef();

  const changeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  const clickHandler = () => {
    dispatch(searchTermClick(searchTerm));
    inputRef.current.value = '';
  }



  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      clickHandler()
    }
  }



  return (
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
  )
}



export default Input