import { useSelector } from "react-redux";

const List = () => {

const cityData = useSelector(state => state)

// const city = [
//   {id: 0, name: 'Dover', pressure: '3', temperature: '7', humidity: '9'},
//   {id: 1, name: 'Chicago', pressure: '13', temperature: '17', humidity: '19'}
// ];

const renderList = () => {
  if (!cityData) {
    return '';
  }
  
  return (
    <div>
      <ul>{cityData.map((city, index) => <li key={index}> 
                                            <div className="row">
                                              <div className="col-3">{city.name}</div>
                                              <div className="col-3">{city.main.temp}</div>
                                              <div className="col-3">{city.main.pressure}</div>
                                              <div className="col-3">{city.main.humidity}</div>
                                            </div>
                                          </li>)}
      </ul>
    </div>
    
  )
}

  return (
    <div className="container">
        <div className="row">
          <div className="col-3">City</div>
          <div className="col-3">Temperature (F)</div>
          <div className="col-3">Pressure (hPa)</div>
          <div className="col-3">Humidity (%)</div>
        </div>
        <div>
          {renderList()}
        </div>
      </div>
  )
}

export default List