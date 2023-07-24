//This component will handle the table full of forecasts after you search a city

import { useSelector } from 'react-redux/es/hooks/useSelector'
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine,
} from 'react-sparklines'

const Forecasts = () => {
    const forecast = useSelector((state) => state.forecast)

    const average = (array) =>
        Math.round(array.reduce((a, b) => a + b) / array.length)

    //Loop through the list of forecasts and return each one formatted as a table row
    const forecastListItems = forecast.map((cityForecast, index) => {
        return (
            <tr key={index}>
                <td>{cityForecast.locationName}</td>
                <td>
                    <Sparklines data={cityForecast.temp}>
                        <SparklinesLine
                            color="orange"
                            svgheight={120}
                            svgwidth={180}
                        />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <p>{average(cityForecast.temp)} F</p>
                </td>
                <td>
                    <Sparklines data={cityForecast.pressure}>
                        <SparklinesLine color="green" />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <p>{average(cityForecast.pressure)} hPa</p>
                </td>
                <td>
                    <Sparklines data={cityForecast.humidity}>
                        <SparklinesLine color="black" />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <p>{average(cityForecast.humidity)} %</p>
                </td>
            </tr>
        )
    })

    return (
        //I need to make a table to hold the data.
        <div className="tableWidth">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th scope="col">City</th>
                        <th scope="col">Temperature (F)</th>
                        <th scope="col">Pressure (hPa)</th>
                        <th scope="col">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>{forecastListItems}</tbody>
            </table>
        </div>
    )
}

export default Forecasts
