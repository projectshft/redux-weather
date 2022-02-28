import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";
import { Link } from "react-router-dom";

const sampleData = [5, 10, 5, 20, 8, 15]


const WeatherPage = (props) => {

  useEffect(() => {
    props.fetchWeather();
  }, [])


  const weather = useSelector(state => state.weather);

  console.log(props.weather);

  const renderWeather = () => {

  }

  return (
    <div>
      <h3>Weather</h3>
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