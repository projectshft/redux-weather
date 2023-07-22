//This component will handle the table full of forecasts after you search a city

import { useSelector } from 'react-redux/es/hooks/useSelector'
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine,
} from 'react-sparklines'

const Forecasts = () => {
    const forecast = useSelector((state) => state.forecast)
    console.log(forecast)

    //Loop through the list of forecasts and return each one formatted as a table row
    const forecastListItems = forecast.map((cityForecast, index) => {
        return (
            <tr key={index}>
                <td>{cityForecast.locationName}</td>
                <td>
                    <Sparklines data={cityForecast.temp}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={cityForecast.pressure}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={cityForecast.humidity}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                </td>
            </tr>
        )
    })

    return (
        //I need to make a table to hold the data.
        <div className="tableWidth">
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">City</th>
                        <th scope="col">Temperature</th>
                        <th scope="col">Pressure</th>
                        <th scope="col">Humidity</th>
                    </tr>
                </thead>
                <tbody>{forecastListItems}</tbody>
            </table>
        </div>
    )
}

export default Forecasts
