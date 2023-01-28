import { useSelector, useDispatch } from "react-redux";

const Display = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch()

  const handleDisplay = () => {
    weather.map((measurement) => {
      console.log(Object.keys(measurement)) // this only gets a array of each individual key, not helpful
    })
  }


  return(
    <div>{handleDisplay()}</div>
  )
}

export default Display;