import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';

class WeatherTable extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    const name = cityData.city.name;
    console.log(name);
    const temps = cityData.list.map((weather) => weather.main.temp);
    console.log(temps);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
          <strong>{name}</strong>
        </td>
        <td>
          <Chart data={temps} color="blue" units="°F" />
        </td>
        <td>
          <Chart data={pressures} color="purple" units="Pa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (Pa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weatherReducer.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weatherReducer }) {
  return { weatherReducer };
}

export default connect(mapStateToProps)(WeatherTable);





// attempt with hooks
// import React from 'react';
// import { useSelector } from 'react-redux';
// import Chart from './Chart';


// const WeatherTable = () => {
//   const weather = useSelector((state) => state.weatherReducer);
//   console.log(weather);
//   console.log(weather[0])
//   const name = weather.map((data) => {
//     return data.city.name;
//   })
//   console.log(name[0]);




//     return (
//     <div>
//         <table className="table table-striped table-margin w-75 container-fluid">
//   <thead>
//     <tr>
//       <th scope="col">City</th>
//       <th scope="col">Temperature (°F)</th>
//       <th scope="col">Pressure (Pa)</th>
//       <th scope="col">Humidity (%)</th>
//     </tr>
//   </thead>
//   <tbody>
//   {/* {weather.map((city) => (
//         <tr  key={weather.number}>
//           <td><img src={contact.profilePic} alt={contact.name + "'s profile pitcure"} /></td>
//           <td>{city.name}</td>
//           <td>{city.temop}</td>
//           <td>{city.humidity}</td>
//         </tr> */}

//     <tr>
//         {/* {cityArr.map(city => {
//             return (
//                 <td>{city.name}</td>
//                 <td><ChartComponent x={city.temp} y={city.something} /></ChartComponent></td>
//             )
//         })} */}
//     </tr>
//     <tr>
//       <td>{name[0]}</td>
//       <td><Chart data={[100, 200, 50]} color="blue" units="F" /></td>
//       <td>{'chart'}</td>
//       <td>{'chart'}</td>
//     </tr>

//   </tbody>
// </table>
//     </div>
//     )
// }

// export default WeatherTable;
