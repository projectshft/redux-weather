import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useSelector } from 'react-redux';
import _ from 'lodash';


const ForecastList = () => {
  // pulled state in to be able to render all forecast data
  const forecasts = useSelector((state) => state);
 
  // function to render forecast data using Sparklines to show the 5 day forecast of temperature, pressure, and humidity. Includes reference line to show 5 day average.
  const renderForecasts = () => {
    if (!_.isEmpty(forecasts.entries)) {
      return forecasts.cityIds.map((id) => {
        return (
          <tr key={id}>
            <td>{forecasts.entries[id].city}</td>
            <td>
              <Sparklines data={forecasts.entries[id].temps} height={150}>
                <SparklinesLine color='orange'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>

              {/* function to display the 5 day average value. Is there an easier way to do this? Since ReferenceLine is also calculating average, can a value be pulled from that?  */}
              <div>{Math.round(forecasts.entries[id].temps.reduce((a, b) => a + b) / forecasts.entries[id].temps.length)} &deg;F</div>
            </td>
            <td>
              <Sparklines data={forecasts.entries[id].pressure} height={150}>
                <SparklinesLine color='green'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>{Math.round(forecasts.entries[id].pressure.reduce((a, b) => a + b) / forecasts.entries[id].pressure.length)} hPa</div>
            </td>
            <td>
              <Sparklines data={forecasts.entries[id].humidity} height={150}>
                <SparklinesLine color='blue'/>
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>{Math.round(forecasts.entries[id].humidity.reduce((a, b) => a + b) / forecasts.entries[id].humidity.length)} %</div>
            </td>
          </tr>
        )
      });
    } else {
      return <tr><td>*Enter a city above for a forecast*</td></tr>
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

export default ForecastList;