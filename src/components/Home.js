import React from 'react'
import OneDayForecast from './OneDayForecast'
import SearchBar from './SearchBar'
import WeatherRow from './WeatherRow'



const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
    <SearchBar />
    <OneDayForecast />
    <WeatherRow />
    {/* <Counter /> */}
    </div>

  )
}

export default Home