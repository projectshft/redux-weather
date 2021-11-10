import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash';

const ChartIndex = () => {
  
  const chart = useSelector((state) => state.chart)

  const renderChart = () => {
    
    const renderSparkline = (data, dataType, color, unit) => {
      const parsedWeatherData = data.map(list => list.main[dataType]);
      const average = _.round(_.sum(parsedWeatherData)/parsedWeatherData.length);
      
      return (
        <>
          <Sparklines data={parsedWeatherData} width={150} svgHeight={150}>
            <SparklinesLine color={color} />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <h4 className="text-center">{average}{unit}</h4>
        </>
      )
    }
    
    return chart.map((row, i) => (
      <tr key={i}>
        <th scope="row" className="h4 align-middle">{row.data.city.name}</th>
        <td>{renderSparkline(row.data.list, 'temp', 'orange', '°F')}</td>
        <td>{renderSparkline(row.data.list, 'pressure', 'green', ' hPa')}</td>
        <td>{renderSparkline(row.data.list, 'humidity', 'purple', '%')}</td>
      </tr>

    ));

  }

  if (chart.length > 0) {
    return (
      <>
        <br />
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperature (F)</th>
              <th scope="col">Pressure (hPa)</th>
              <th scope="col">Humidity(%)</th>
            </tr>
          </thead>
          <tbody>
          {renderChart()}
          </tbody>
        </table>
      </>
    );
  } else {
    return('');
  }
}

export default ChartIndex;