import '../index.css';
import { useSelector } from "react-redux";
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const Table = () => {
  const Data = useSelector((state) => state.map((p) => p.data));

  if(Data[0] === undefined) {
    return null;
  }

  const dataSorter = Data.map((e) => {
    const F = '\u00b0'
    const city = e.city;
    const tempArray = e.conditions.map((p) => p.main.temp);
    const pressureArray = e.conditions.map((p) => p.main.pressure);
    const humidityArray = e.conditions.map((p) => p.main.humidity);
    const averages = (avg) => {
      if(avg === tempArray) {
        const average = (avg.reduce((add, a) => add + a, 0))/avg.length;
        return Math.round((average * 1.8) - 459.67);
      } else {
        const average = (avg.reduce((add, a) => add + a, 0))/avg.length;
        return Math.round(average);
      }
    };
    return {
      pressureArray: pressureArray,
      tempArray: tempArray,
      humidityArray: humidityArray,
      tempAvg: averages(tempArray),
      humidityAvg: averages(humidityArray),
      pressureAvg: averages(pressureArray),
      city: city,
      F: F
    };
  })
//Couldn't figure out how to make the key error go away. 
  const renderPosts = () => {
      return dataSorter.map((p) => {
        return (
            <tbody>
                <tr className='text-muted text-center fst-italic'  key={p.city}>
                  <td className="align-middle" key={p.city}>
                    {p.city}
                  </td>
                  <td key={`${p.city} - temp`}>
                    <Sparklines data={p.tempArray} svgWidth={295} svgHeight={110}>
                      <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: "0" }} />
                      <SparklinesLine style={{ stroke: "#41c3f9", fill: "#41c3f9", fillOpacity: ".5"}} />
                      <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <p key={p.tempAvg}>Average: {p.tempAvg}{p.F}</p>
                  </td>
                  <td key={`${p.city} - pressure`}>
                  <Sparklines data={p.pressureArray} svgWidth={295} svgHeight={110}>
                      <SparklinesBars style={{ stroke: "white", fill: "#5076de", fillOpacity: "0" }} />
                      <SparklinesLine style={{ stroke: "#5076de", fill: "#5076de", fillOpacity: ".5" }} />
                      <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <p key={p.pressureAvg}>Average: {p.pressureAvg} hPa</p>
                  </td>
                  <td key={`${p.city} - humidity`}>
                  <Sparklines data={p.humidityArray} svgWidth={295} svgHeight={110}>
                      <SparklinesBars style={{ stroke: "white", fill: "#5827e8", fillOpacity: "0" }} />
                      <SparklinesLine style={{ stroke: "#5827e8", fill: "#5827e8", fillOpacity: ".5" }} />
                      <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <p key={p.humidityAvg}>Average: {p.humidityAvg}%</p>
                  </td>
                </tr>
            </tbody>
        )
      });
  }
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
        {renderPosts()}
      </table>
    </div>
  )
}

export default Table;