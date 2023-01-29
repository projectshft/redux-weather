import { useState } from "react";
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";


const WeatherTableData = () => {
  const cityInfo = useSelector((state) => state.forecasts)

  const [ cityData, setCityData ] = useState([]);
  if (cityInfo) {
    if (cityData.length === 0) {
      setCityData([cityInfo]);
    // } else {
    //   if (cityData.indexOf(cityInfo) !== -1) {
    //     setCityData([cityInfo, ...cityData])
    //   }  
    }
  }
  console.log(cityData);

  const average = array => array.reduce((a, b) => a + b) / array.length;
  
  // const averageTemp = Math.round(average(cityInfo.temperature));
  // const averagePressure = Math.round(average(cityInfo.pressure));
  // const averageHumidity = Math.round(average(cityInfo.humidity));

  return (
  <>
    { cityInfo ?
      <tbody>
      <tr className="text-center">
        <td className="align-middle">{cityInfo.city}</td>
        <td className="align-middle">
          <Sparklines data={cityInfo.temperature}>
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          {/* <p>{averageTemp} F</p> */}
        </td>
        <td className="align-middle">
        <Sparklines data={cityInfo.pressure}>
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          {/* <p>{averagePressure} hPa</p> */}
        </td>
        <td className="align-middle">
        <Sparklines data={cityInfo.humidity}>
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          {/* <p>{averageHumidity} %</p> */}
        </td>
      </tr>
      </tbody>
      : <tbody></tbody>
    }
  </>
  )
}

export default WeatherTableData