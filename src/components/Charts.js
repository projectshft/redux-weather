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
              data={search.data.list.map((chart) => {
                return chart.main.temp;
              })}>
              <SparklinesLine 
                color="red" />
              <SparklinesReferenceLine 
                type="avg" />
            </Sparklines>
              <p>{dataAvg(search.data.list.map((chart) => {
                return chart.main.temp
              }))} </p>
          </td>

          <td>
            <Sparklines 
              data={search.data.list.map((chart) => { 
                return chart.main.pressure;
              })}>
            <SparklinesLine 
              color="red" />
            <SparklinesReferenceLine 
              type="avg" />
            </Sparklines>
            <p>{dataAvg(search.data.list.map((chart) => {
              return chart.main.pressure
            }))} hPa </p>
          </td>

          <td>
            <Sparklines 
              data={search.data.list.map((chart) => {
                return chart.main.humidity;
              })}>
            <SparklinesLine 
              color="red" />
            <SparklinesReferenceLine 
              type="avg" />
            </Sparklines>
            <p>{dataAvg(search.data.list.map((chart) => {
              return chart.main.humidity;
            }))} % </p>
          </td>
        </tr>
      </tbody>
    </table>
  
  ));

};

export default Charts;