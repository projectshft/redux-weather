
import { useState } from "react";
import { useDispatch } from "react-redux"
import { inputClick } from "../Actions";

const Input = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState();

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  const clickHandler = () => {
    dispatch(inputClick())
  }

  return (
    <div>
      <input type="text" onChange={changeHandler}></input>
      <button type="button" className="btn btn-primary" onClick={clickHandler}>Submit</button>
    </div>
  )
}

export default Input