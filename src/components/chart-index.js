import { useSelector } from "react-redux";

const ChartIndex = () => {
  
  const chart = useSelector((state) => state.chart)

  function renderChart() {
    return chart.map((row, i) => (
      <tr key={i}>
        <th scope="row">{row.data.city.name}</th>
        <td>{row.data.list[0].main.temp}</td>
        <td>{row.data.list[0].main.pressure}</td>
        <td>{row.data.list[0].main.humidity}</td>
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