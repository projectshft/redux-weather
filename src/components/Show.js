import { useSelector } from "react-redux";

const Show = () => {
  const city = useSelector(state => state.city)
  
  return (
    <div>
      <p>City: {city}</p>
    </div>
  )
}

export default Show;