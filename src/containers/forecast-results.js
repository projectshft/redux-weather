import { useSelector } from "react-redux";
import { Sparklines, SparklinesCurve, SparklinesReferenceLine} from "react-sparklines";
import _ from 'lodash';

const ForecastResults = () => {
  const forecast = useSelector((state) => {
    return state.forecast});
 
  if (forecast.error) {
    return (<div className="error-message">Please enter valid city name</div>)
  }

  if (_.isEmpty(forecast.forecast_data)) {
    return null
  }

  return (
    <div className="forecast-results">

        <table className="table table-hover table-bordered">
          <tbody> 
            <tr className="table-header">
              <th>City</th>
              <th scope="col-2">Temperature (F)</th>
              <th scope="col-2">Pressure (hPa)</th>
              <th scope="col-2">Humidity (%)</th>
            </tr>    
            <tr>
              <td className="align-middle">{forecast.forecast_data.city} </td>
              <td>
                <Sparklines data={forecast.forecast_data.temperature_data} width={100} margin={5}>
                  <SparklinesCurve color="orange"/>
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                {forecast.forecast_data.mean_temperature} F
              </td>
              <td>
                <Sparklines data={forecast.forecast_data.pressure_data} width={100} margin={5}>
                  <SparklinesCurve color="green"/>
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                {forecast.forecast_data.mean_pressure}  hPa
              </td>
              <td>
                <Sparklines data={forecast.forecast_data.humidity_data} width={100} margin={5}>
                  <SparklinesCurve color="grey"/>
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                {forecast.forecast_data.mean_humidity} %
              </td>
            </tr>
          </tbody>    
        </table>
    </div>
  )
}

export default ForecastResults