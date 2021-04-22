import { useSelector } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CityWeatherListItem = ({city}) => {
  // const city = useSelector(({cities}) => cities);
  return(
    <tr>
      <th scope="row">{city.name}</th>
      <td>
        <Sparklines data={city.temperatures} width={100} height={50}>
          <SparklinesLine color="brown" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Avg Temp
      </td>
      <td>
        <Sparklines data={city.pressures} width={100} height={50}>
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Avg Pressure
      </td>
      <td>
        <Sparklines data={city.humidityPoints} width={100} height={50}>
          <SparklinesLine color="black" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Avg Humidity
      </td>
    </tr>
  )
}

export default CityWeatherListItem;