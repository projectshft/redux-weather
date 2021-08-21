import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const CityTable = () => {
  const temperatureData = [5,10,15,20];
  const temperatureSum = temperatureData.reduce((a, b) => a + b, 0);
  const temperatureAvg = temperatureSum/temperatureData.length;

  const pressureData = [6,13,2,19];
  const pressureSum = pressureData.reduce((a, b) => a + b, 0);
  const pressureAvg = pressureSum/pressureData.length;

  const humidityData = [1,44,55,39];
  const humiditySum = humidityData.reduce((a, b) => a + b, 0);
  const humidityAvg = humiditySum/humidityData.length;

  return (
    <table className="table">
      <thead className="table-light text-center">
        <tr>
          <th scope="col">City</th>
          <th scope="col">Temperature (F)</th>
          <th scope="col">Pressure (hPa)</th>
          <th scope="col">Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>
          </td>
          <td>
          <Sparklines data={temperatureData}>
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="text-center">{temperatureAvg} F</div>
          </td>
          <td>
          <Sparklines data={pressureData}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="text-center">{pressureAvg} hPa</div>
          </td>
          <td>
          <Sparklines data={humidityData}>
            <SparklinesLine color="purple" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="text-center">{humidityAvg} %</div>
          </td>
        </tr>
      </tbody>
      </table>
  )
}

export default CityTable;
