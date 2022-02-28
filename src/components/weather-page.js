import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";
import { Table, Form, InputGroup, Button, FormControl } from "react-bootstrap";

const sampleData = [5, 10, 5, 20, 8, 15]


const WeatherPage = (props) => {

  useEffect(() => {
    props.fetchWeather('Chicago');
  }, [])


  const weather = useSelector(state => state.weather);


  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    console.log(props.weather)
    e.preventDefault();
    props.fetchWeather(query);
  }

  const renderCityRow = () => {
    return props.weather.map((city) => {
      console.log(city)
      return (
        <>
        <tr>
          <td className="align-middle text-center">{city.city}</td>
          <td className="w-25">
            <Sparklines data={city.tempArray} height={100}>
              <SparklinesLine color="green"/>
              <SparklinesReferenceLine type="mean"/>
            </Sparklines>
          </td>
          <td className="w-25">
            <Sparklines data={city.pressureArray} height={100}>
              <SparklinesLine color="orange"/>
              <SparklinesReferenceLine type="mean"/>
            </Sparklines>
          </td>
          <td className="w-25">
            <Sparklines data={city.humidityArray} height={100}>
              <SparklinesLine color="red"/>
              <SparklinesReferenceLine type="mean"/>
            </Sparklines>
          </td>
        </tr>
        </>
      )
    })
  }
  
  const renderWeather = () => {
    return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl value={query} onChange={(e) => setQuery(e.target.value)}></FormControl>
          <Button type="submit" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Form>
      <hr />
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
            {/* <tr>
              <td className="align-middle text-center">{props.weather.city}</td>
              <td className="w-25">
                <Sparklines data={props.weather.tempArray} height={100}>
                  <SparklinesLine color="green"/>
                  <SparklinesReferenceLine type="mean"/>
                </Sparklines>
              </td>
              <td className="w-25">
                <Sparklines data={props.weather.tempArray} height={100}>
                  <SparklinesLine color="orange"/>
                  <SparklinesReferenceLine type="mean"/>
                </Sparklines>
              </td>
              <td className="w-25">
                <Sparklines data={props.weather.tempArray} height={100}>
                  <SparklinesLine color="red"/>
                  <SparklinesReferenceLine type="mean"/>
                </Sparklines>
              </td>
            </tr> */}
            {renderCityRow()}
          </tbody>
        </Table>
      </div>
    </div>
    )
  }

  return (
      renderWeather()
  )
}

function mapStateToProps(state) {
  return { weather: state.weather };
}
function mapDispatchToProps(dispatch) {
  return { fetchWeather: bindActionCreators(fetchWeather, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);