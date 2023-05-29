import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../actions';
import { useEffect } from 'react';
import _ from 'lodash';


const ForecastList = () => {
  const forecasts = useSelector((state) => state);
 

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
      return <tr><td>*Enter a city for forecast data*</td></tr>
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