import ForecastItem from "./Forecast";

const ForecastList = ({forecasts}) => {
    if(!forecasts){
        return <div className="alert alert-info">No weather here!</div>
    }

    const renderForecastItems = () => {
        return forecasts.map((forecast) => {
            return <ForecastItem forecast={forecast}/>
        })
    }

    return (
        <div className="row">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (F)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderForecastItems()}
                    </tbody>
                </table>
            </div>
        </div>
    )

}            

export default ForecastList;