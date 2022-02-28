import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";
import { Table } from "react-bootstrap";

const sampleData = [5, 10, 5, 20, 8, 15]


const WeatherPage = (props) => {

  useEffect(() => {
    props.fetchWeather();
  }, [])


  const weather = useSelector(state => state.weather);

  console.log(props.weather);

  const renderWeather = () => {
    return (
    <div>
      <Table striped hover>
        <thead>
          <tr className="text-center">
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidty (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle text-center">{props.weather.city}</td>
            <td className="w-25">
              <Sparklines data={props.weather.tempArray} height={100}>
                <SparklinesLine/>
                <SparklinesReferenceLine type="mean"/>
              </Sparklines>
            </td>
            <td className="w-25">
              <Sparklines data={props.weather.tempArray} height={100}>
                <SparklinesLine/>
                <SparklinesReferenceLine type="mean"/>
              </Sparklines>
            </td>
            <td className="w-25">
              <Sparklines data={props.weather.tempArray} height={100}>
                <SparklinesLine/>
                <SparklinesReferenceLine type="mean"/>
              </Sparklines>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    )
  }

  return (
    <div>
      <h3>Weather</h3>
      {renderWeather()}
    </div>
  )
}

function mapStateToProps(state) {
  return { weather: state.weather };
}
function mapDispatchToProps(dispatch) {
  return { fetchWeather: bindActionCreators(fetchWeather, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);