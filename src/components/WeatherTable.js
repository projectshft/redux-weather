import React from 'react';


const data = {
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}




const WeatherTable = (weather) => {
    return (
    <div>
        <table className="table table-striped table-margin w-75 container-fluid">
  <thead>
    <tr>
      <th scope="col">City</th>
      <th scope="col">Temp</th>
      <th scope="col">Pressure</th>
      <th scope="col">Humidity</th>
    </tr>
  </thead>
  <tbody>
  {/* {weather.map((city) => (
        <tr  key={weather.number}>
          <td><img src={contact.profilePic} alt={contact.name + "'s profile pitcure"} /></td>
          <td>{city.name}</td>
          <td>{city.temop}</td>
          <td>{city.humidity}</td>
        </tr> */}

    <tr>
        {/* {cityArr.map(city => {
            return (
                <td>{city.name}</td>
                <td><ChartComponent x={city.temp} y={city.something} /></ChartComponent></td>
            )
        })} */}
      <td>{data.name}</td>
      <td>{data.main.temp} °F</td>
      <td>{data.main.humidity}</td>
      <td>{data.main.pressure}</td>
    </tr>
  </tbody>
</table>
    </div>
    )
}

export default WeatherTable;