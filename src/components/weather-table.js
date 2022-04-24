import { fetchCities } from "../actions";


const Weather = () => {
  const handleClick = () => {
    console.log('hi')
    fetchCities();
  }
  
  return (
    <div>
      <button
        onClick={handleClick}
      >Hi</button>
    </div>
  )
}

export default Weather;