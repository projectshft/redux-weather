// import { useSelector } from "react-redux";

// See 1. Intro to Redux - 7.Creating our Components and Containers

const WeatherInfo = (props) => {
  // const state = useSelector((state) => state)

  // console.log(state);

  const renderInfo = () => {
    return props.weather.map(weather => {
      return (
        <li key={weather.list.dt}>
          {weather}
        </li>
      )
    })
  }

  return (
    <ul>
      {renderInfo()}
    </ul>
  )
}

export default WeatherInfo;