
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

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      alert('key press works!')
    }
  }


  return (
    <form>
      <input 
        id="input-box" 
        type="text" 
        placeholder="enter city" 
        onChange={changeHandler} 
        onKeyDown={enterHandler}
      ></input>
      <button type="button" className="btn btn-primary" onClick={clickHandler}>Submit</button>
    </form>
  )
}



export default Input