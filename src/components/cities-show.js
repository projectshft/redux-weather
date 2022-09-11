// import React Sparklines from 'react-sparklines';
import { useSelector } from "react-redux";

const CitiesShow = () => {

  const forecast = useSelector((state) => state.forecast);

  console.log(forecast);

  const temp = [];
  const pressure = [];
  const humidity = [];

  forecast.forEach((f) => {
    temp.push(f.temperature);
    pressure.push(f.pressure);
    humidity.push(f.humidity);
  });

  console.log(temp);
  


  

  return (

    <div>
      <table className="table table-hover" id="display">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {
              <tr>
                <td>city</td>
                <td>{temp}</td>
                <td>{pressure}</td>
                <td>{humidity}</td>
              </tr>
            
          }
        </tbody>
      </table>
    </div>
  );
};


export default CitiesShow;
