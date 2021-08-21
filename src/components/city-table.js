import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const CityTable = () => {
  const temperatureData = [5,10,15,20];
  const pressureData = [6,13,2,19];
  const humidityData = [1,44,55,39];

  return (
    <table className="table">
      <thead className="table-light">
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
          </td>
          <td>
          <Sparklines data={pressureData}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          </td>
          <td>
          <Sparklines data={humidityData}>
            <SparklinesLine color="purple" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          </td>
        </tr>
      </tbody>
      </table>
  )
}

export default CityTable;
