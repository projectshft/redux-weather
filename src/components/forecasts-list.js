import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash';

const CityForecastsList = () => {
  const forecasts = useSelector((state) => state);

  const renderForecasts = () => {
    if (!_.isEmpty(forecasts.city)) {
      return forecasts.queryCityEntries.map((id) => {
        return (
          <tr key={id}>
            <td>{forecasts.queryCityEntries[id].city}</td>
            <td>
              <Sparklines data={forecasts.city[id].temps} width={150} height={100}>
                <SparklinesLine color='purple'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>{Math.round(forecasts.city[id].temps.reduce((a, b) => a + b) / forecasts.city[id].temps.length)} &deg;F</div>
            </td>
            <td>
              <Sparklines data={forecasts.city[id].pressure} width={150} height={100}>
                <SparklinesLine color='red'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>{Math.round(forecasts.city[id].pressure.reduce((a, b) => a + b) / forecasts.city[id].pressure.length)} hPa</div>
            </td>
            <td>
              <Sparklines data={forecasts.city[id].humidity} width={150} height={100}>
                <SparklinesLine color='orange'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>{Math.round(forecasts.city[id].humidity.reduce((a, b) => a + b) / forecasts.city[id].humidity.length)} %</div>
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
    <div>
      <table className='table text-center align-middle'>
        <thead>
          <tr>
            <th scope='col' className='col-md-3'>City</th>
            <th scope='col' className='col-md-3'>Temperature(&deg;F)</th>
            <th scope='col' className='col-md-3'>Pressure(hPa)</th>
            <th scope='col' className='col-md-3'>Humidity(%)</th>
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