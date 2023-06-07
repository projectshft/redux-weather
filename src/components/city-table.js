import { Sparklines, SparklinesLine } from 'react-sparklines'


const CityTable = () => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (F)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td><Sparklines data={[50, 10, 5, 20,23,55,1,22,78,45,43,32]}>
    <SparklinesLine />
</Sparklines></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

export default CityTable;