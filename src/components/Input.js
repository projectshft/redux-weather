
import { useState } from "react";
import { useDispatch } from "react-redux"
import { searchTermClick } from "../Actions";

const Input = () => {
  

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState();

  const changeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  const clickHandler = () => {
    dispatch(searchTermClick(searchTerm))
  }

  


  return (
    <div>
      <input type="text" onChange={changeHandler}></input>
      <button type="button" className="btn btn-primary" onClick={clickHandler}>Submit</button>
    </div>
  )
}



export default Input