import { useSelector } from "react-redux";


const WeatherDisplay = () => {
  const city = useSelector((state)=>state.weather)

        return (
          <div>
            You are looking for a weather in {city}
          </div>
        );
}

export default WeatherDisplay