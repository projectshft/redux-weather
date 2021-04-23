import { fetchNewTableRow, accessLocation, setDefault } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Chart from '../components/Chart'

export default function Row ({row}) {
  const dispatch = useDispatch();
  const defaultData = useSelector(state => state.default)

  const defaultClick = (city) => dispatch(setDefault(city === defaultData ? '' : city))
  
  const renderPin = () => {
    return (
      <td>
        <img src='https://www.vhv.rs/dpng/d/15-150510_white-location-pin-png-transparent-png.png' alt='' title='your current location' width={60}></img>
      </td>
    )
  }
  
  const renderDefaultButton = (city) => {
    const defaultCity = city === defaultData;
    return (
      <>
        <td>
          <button className={`btn btn-sm ${defaultCity ? 'btn-warning' : 'btn-primary'}`} onClick={() => defaultClick(city)}>{defaultCity ? 'remove default' : 'set as default'}</button>
        </td>
      </>
    )
  }
  
  return (
    <tr>
      <td><h2>{row.name}</h2></td>
      <Chart data={row} stat='temp'/>
      <Chart data={row} stat='pressure'/>
      <Chart data={row} stat='humidity'/>
      {renderDefaultButton(row.name)}
      {row.currentLocation && renderPin()}
    </tr>
  )
}