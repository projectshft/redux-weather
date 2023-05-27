import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const ForecastList = () => {
  return (
    <div>
      <table className='table text-center align-middle'>
        <thead>
          <tr>
            <th scope='col' className='col-md-3'>City</th>
            <th scope='col' className='col-md-3'>Temperature(&deg;F)</th>
            <th scope='col' className='col-md-3'>Pressure(hPa)</th>
            <th scope='col' className='col-md-3'>Humidity(%)</th>
          </tr>
        </thead>
      
        <tbody>
          <tr>
            <td>City Name</td>
            <td>
              <Sparklines data={[5, 10, 5, 20, 8, 15]} height={150}>
                <SparklinesLine />
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>65 &deg;F</div>
            </td>
            <td>
              <Sparklines data={[5, 10, 5, 20, 8, 15]} height={150}>
                <SparklinesLine />
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>1001 hPa</div>
            </td>
            <td>
              <Sparklines data={[5, 10, 5, 20, 8, 15]} height={150}>
                <SparklinesLine />
                <SparklinesReferenceLine type='mean'/>
              </Sparklines>
              <div>61%</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default ForecastList;