//This component will handle the table full of forecasts after you search a city

import { useSelector } from 'react-redux/es/hooks/useSelector'

function Forecasts() {
    const forecast = useSelector((state) => state.forecast)
    console.log(forecast)

    return (
        <div>
            <p>Forecasts Test</p>
        </div>
    )
}

export default Forecasts
