import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import 'bootstrap/dist/css/bootstrap.css';


const WeatherList = ({ weather }) => {
  
   

function renderWeather(){
    
    return weather.map((i) =>(
     
        <table className="table">
        <tbody>
    <tr>
        <th>{i.city}</th>
      <td><Sparklines data={i.avgTemps}>
        <SparklinesLine style={{ fill: "#41c3f9" }}/>
        <SparklinesReferenceLine type="mean" />
        </Sparklines>{i.avgCeptionTemp} F</td>
      <td><Sparklines data={i.avgPressures}>
        <SparklinesLine style={{ fill: "#198935" }} />
        <SparklinesReferenceLine type="mean" />
        </Sparklines>{i.avgCeptionPressure} hPa</td>
      <td><Sparklines data={i.avgHumidities}>
        <SparklinesLine style={{ fill: "#D8A3DA" }} />
        <SparklinesReferenceLine type="mean" />
        </Sparklines>{i.avgCeptionHumidity} %</td>
    </tr>
    </tbody>
    </table>
    ))
}

return (
    <div>
        <hr></hr>
      <div>{renderWeather()}</div>
    </div>
    )

}

export default WeatherList