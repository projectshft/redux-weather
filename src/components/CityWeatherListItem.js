import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CityWeatherListItem = ({city}) => {
  // const city = useSelector(({cities}) => cities);

  const findAverage = (arr) => Math.round(arr.reduce((acc, e) => e+acc, 0)/arr.length);

  return(
    <tr>
      <th scope="row">{city.name}</th>
      <td>
        <Sparklines data={city.temperatures} width={100} height={68}>
          <SparklinesLine color="brown" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Average Temp: {findAverage(city.temperatures)} F
      </td>
      <td>
        <Sparklines data={city.pressures} width={100} height={50}>
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Average Pressure: {findAverage(city.pressures)} hPa
      </td>
      <td>
        <Sparklines data={city.humidityPoints} width={100} height={56}>
          <SparklinesLine color="black" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Average Humidity: {findAverage(city.humidityPoints)} %
      </td>
    </tr>
  )
}

export default CityWeatherListItem;