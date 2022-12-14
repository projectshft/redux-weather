import React from 'react'
import { useSelector } from 'react-redux'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function Charts () {
  const weatherCharts = useSelector(state => state.weatherCharts)

  const displaySparklines = () => {
    // if(weatherCharts){
      return weatherCharts.map((chart, index => {
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
  );
}

export default Charts

      

