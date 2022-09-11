// import React Sparklines from 'react-sparklines';
import { useSelector } from "react-redux";

const CitiesShow = () => {

  const forecast = useSelector((state) => state.forecast);

  console.log(forecast);

  
  

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
          {/* {NewState.forecast?.map((f) => {
            return (
              <tr key={f.dt}>
                <td>{f.temperature}</td>
                <td>{f.pressure}</td>
                <td>{f.humidity}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};


export default CitiesShow;
