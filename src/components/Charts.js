import React from 'react'
import { useSelector } from 'react-redux'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function Charts(){
  const chartInfo = useSelector((state) => state.chartInfo)
  const displayCharts = () => {
    return chartInfo.map((chartInfo, id) => {
    
    const getAverageData = (array) => {
      const total = array.reduce((acc, val) => acc + val, 0) / array.length;
      return Math.round(total);
    }

    const averageTemp = getAverageData(weather.temp);
    const averagePressure = getAverageData(weather.pressure);
    const averageHumidity = getAverageData(weather.humidity);


  return(
    <tr key={index}>
      <th>{currentWeatherPost.city}</th>
      <td >
        <Sparklines data={temp} height={100} width={120}>
          <SparklinesLine color="orange" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <p>{averageTemp} F</p>
      </td>

     <td >
        <Sparklines data={pressure} height={100} width={120}>
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <p>{averagePressure} hPa</p>
      </td>

      <td >
        <Sparklines data={humidity} height={100} width={120}>
          <SparklinesLine color="blue" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <p>{averageHumidity} %</p>
      </td>
    </tr>
    );
  });
}

return (
  displayCharts ()
)
}

export default Charts