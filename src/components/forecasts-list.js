import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash';

const CityForecastsList = () => {
  const forecasts = useSelector((state) => state.forecasts);

  // console.log(forecasts);

  const renderForecasts = () => {
    if (!_.isEmpty(forecasts.queryCityEntries)) {
      return forecasts.queryCityIds.map((id) => {
        return (
          <tr key={id}>
            <td>{forecasts.queryCityEntries[id].city}</td>
            <td>
              <Sparklines data={forecasts.queryCityEntries[id].temperature} svgwidth={150} svgheight={100}>
                <SparklinesLine color='purple'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>{Math.round(forecasts.queryCityEntries[id].temperature.reduce((a, b) => a + b) / forecasts.queryCityEntries[id].temperature.length)} &deg; F</div>
            </td>
            <td>
              <Sparklines data={forecasts.queryCityEntries[id].pressure} svgwidth={150} svgheight={100}>
                <SparklinesLine color='orange'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>{Math.round(forecasts.queryCityEntries[id].pressure.reduce((a, b) => a + b) / forecasts.queryCityEntries[id].pressure.length)} hPa</div>
            </td>
            <td>
              <Sparklines data={forecasts.queryCityEntries[id].humidity} svgwidth={150} svgheight={100}>
                <SparklinesLine color='red'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>{Math.round(forecasts.queryCityEntries[id].humidity.reduce((a, b) => a + b) / forecasts.queryCityEntries[id].humidity.length)} %</div>
            </td>
          </tr>
        )
      });
    } else {
      return (
        <tr>
          <td>No Cities Entered</td>
          <td></td>
          <td></td>
          <td></td>
        </tr> 
      ) 
    }
  }

  return (
    <div className="table-body">
      <table className='table text-center align-middle'>
        <thead>
          <tr>
            <th scope='col'>City</th>
            <th scope='col'>Temperature(&deg; F)</th>
            <th scope='col'>Pressure(hPa)</th>
            <th scope='col'>Humidity(%)</th>
          </tr>
        </thead>

        <tbody>
          {renderForecasts()}
        </tbody>
      </table>
    </div>

  )
}

export default CityForecastsList;