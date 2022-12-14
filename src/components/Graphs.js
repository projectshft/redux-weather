import React from 'react'
import { useSelector } from 'react-redux'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function Graphs () {
  const weatherGraphs = useSelector(state => state.weatherGraphs)

  const displayGraphs = () => {
    if(weather)
      const name = cityData && cityData.name;
    const temps = cityData && cityData.list.map(weather => weather.main.temp);
    const pressure = cityData && cityData.list.map(weather => weather.
    main.pressure);
    const humidity = cityData && cityData.list.map(weather => weather.main.humidity);
  }

  return (
    <div className="graphs">
      <h1>Weather Graphs</h1>
      <tr key={index}>
            <th>{currentWeatherPost.city}</th>
            <td >
              <Sparklines limit={5} svgWidth={250} svgHeight={75} margin={5} data={currentWeatherPost.temp}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td >
              <Sparklines  limit={5} svgWidth={250} svgHeight={75} margin={5} data={currentWeatherPost.pressure}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td >
              <Sparklines limit={5} svgWidth={250} svgHeight={75} margin={5} data={currentWeatherPost.humidity}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
          </tr>
    </div>
  );
}

export default Graphs

      

