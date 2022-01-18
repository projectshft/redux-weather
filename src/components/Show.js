import { useSelector } from "react-redux";

const Show = () => {
  const city = useSelector(state => state.city);
  const temperature = useSelector(state => state.temperature);
  const pressure = useSelector(state => state.pressure);
  const humidity = useSelector(state => state.humidity);

  const renderPosts = () => {
    
  }
  
 
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">City</div>
          <div className="col-3">Temperature (F)</div>
          <div className="col-3">Pressure (hPa)</div>
          <div className="col-3">Humidity (%)</div>
        </div>
        <ul>{renderPosts()}</ul>
      </div>
      
    </div>
  )
}

export default Show;