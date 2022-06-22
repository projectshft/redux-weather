import { forecastSlice } from './features/forecast/forecastSlice'
import { useSelector } from 'react-redux'
import { selectForecasts } from './features/forecast/forecastSlice'


const ForecastSkeleton = ({city}) => {

        <main>
          <h3>Data from weatherAPI</h3>
          <ul>
            <li>{city}</li>
          </ul>
        </main>

    };

export const Forecast = () => {

  const {forecasts} = useSelector(selectForecasts);
  if(forecasts.length > 0)
  {for (let i = 0; i < forecasts.length; i++) {
    return(
      <ForecastSkeleton 
      city={forecasts[i].city}/>
    )
  }}
}




