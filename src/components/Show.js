import { useSelector } from "react-redux";

const Show = () => {
  const city = useSelector(state => state.city)
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">City: {city}</div>
          <div className="col-3">Temperature (F)</div>
          <div className="col-3">Pressure (hPa)</div>
          <div className="col-3">Humidity (%)</div>
        </div>
      </div>
      
    </div>
  )
}

export default Show;