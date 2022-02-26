import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.list || []);
  
  const tempArray = data.map((p) => {
    return p.main.temp
  });
  const pressureArray = data.map((p) => {
    return p.main.pressure
  });
  const humidityArray = data.map((p) => {
    return p.main.humidity
  });
  const averages = (avg) => {
    if(avg === tempArray) {
      const average = (avg.reduce((add, a) => add + a, 0))/avg.length;
      return Math.round((average * 1.8) - 459.67);
    } else {
      const average = (avg.reduce((add, a) => add + a, 0))/avg.length;
      return Math.round(average);
    }
  }
  console.log(averages(tempArray))
  console.log(averages(pressureArray))
  console.log(averages(humidityArray))


  return (
    <div className="row offset-md-2 col-md-8">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"><strong>City</strong></th>
            <th scope="col"><strong>Temperature(F)</strong></th>
            <th scope="col"><strong>Pressure(hPa)</strong></th>
            <th scope="col"><strong>Humidity(%)</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}




export default Table;