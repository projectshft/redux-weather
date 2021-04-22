import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CityWeatherListItem = () => {
  return(
    <tr>
      <th scope="row">Durham</th>
      <td>
        <Sparklines data={[5, 10, 5, 20, 2, 20, 15, 10]} width={100} height={50}>
          <SparklinesLine color="brown" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Avg Temp
      </td>
      <td>
        <Sparklines data={[5, 10, 5, 20, 2, 20, 15, 10]} width={100} height={50}>
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Avg Pressure
      </td>
      <td>
        <Sparklines data={[5, 10, 5, 20, 2, 20, 15, 10]} width={100} height={50}>
          <SparklinesLine color="black" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Avg Humidity
      </td>
    </tr>
  )
}

export default CityWeatherListItem;