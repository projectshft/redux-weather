import { 
  Sparklines, 
  SparklinesLine, 
  SparklinesReferenceLine 
} from 'react-sparklines';

const Charts = ({ forecast }) => {

  const dataAvg = (weatherArray) => {
    const total = weatherArray.reduce((a, b) => a + b, 0);
    return Math.round( total / weatherArray.length);
  }

  return forecast.map((search, i) => (
  
    <table key={i}>
      <tbody>
        <tr>
          <td>
            <h3>{search.data.city.name}</h3>
          </td>

          <td>
            <Sparklines 
              svgWidth={200}
              svgHeight={150}
              data={search.data.list.map((chart) => {
                return chart.main.temp;
              })}>
              <SparklinesLine 
                color="green" />
              <SparklinesReferenceLine 
                type="avg" />
            </Sparklines>
              <p>Temperature: {dataAvg(search.data.list.map((chart) => {
                return chart.main.temp
              }))} F </p>
          </td>

          <td>
            <Sparklines 
              svgWidth={200}
              svgHeight={150}
              data={search.data.list.map((chart) => { 
                return chart.main.pressure;
              })}>
            <SparklinesLine 
              color="orange" />
            <SparklinesReferenceLine 
              type="avg" />
            </Sparklines>
            <p>Pressure: {dataAvg(search.data.list.map((chart) => {
              return chart.main.pressure
            }))} hPa </p>
          </td>

          <td>
            <Sparklines 
              svgWidth={200}
              svgHeight={150}
              data={search.data.list.map((chart) => {
                return chart.main.humidity;
              })}>
            <SparklinesLine 
              color="red" />
            <SparklinesReferenceLine 
              type="avg" />
            </Sparklines>
            <p>Humidity: {dataAvg(search.data.list.map((chart) => {
              return chart.main.humidity;
            }))} % </p>
          </td>
        </tr>
      </tbody>
    </table>
  
  ));

};

export default Charts;