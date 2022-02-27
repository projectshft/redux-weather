import '../index.css';
import { useSelector } from "react-redux";
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const Table = () => {
  const Data = useSelector((state) => state.map((p) => p.data));
  console.log(Data);
  const nameData = useSelector((state) => state.map((p) => p.name))
  console.log(nameData)

  // let count = nameData.length -1;


  const dataSorter = Data.map((i) => {
    const nameSorter = () => {
      for (let i = 0; i < nameData.length; i++) {
        const element = nameData[i];
        return element
      }
    }
    const tempArray = i.map((p) => p.main.temp);
    const pressureArray = i.map((p) => p.main.pressure);
    const humidityArray = i.map((p) => p.main.humidity);
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
      F: '\u00b0',
      nameSorter: nameSorter()
    };
  });
  // const nameSorter = nameData.map((i) => {
  //   const placeholder = i;
  //   return placeholder;
  // })
  const nameSorter = () => {
    for (let i = 0; i < nameData.length; i++) {
      const element = nameData[i];
      return element
    }
  }

  const renderPosts = () => {
      return dataSorter.map((p) => {
        return (
            <tbody>
              <tr className='text-muted text-center'>
                <td className="align-middle fst-italic">
                  {p.nameSorter}
                </td>
                <td>
                  <Sparklines data={p.tempArray} svgWidth={295} svgHeight={110}>
                    <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: "0" }} />
                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "#41c3f9", fillOpacity: ".5"}} />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                  <p>{p.tempAvg}{p.F}</p>
                </td>
                <td>
                 <Sparklines data={p.pressureArray} svgWidth={295} svgHeight={110}>
                    <SparklinesBars style={{ stroke: "white", fill: "#5076de", fillOpacity: "0" }} />
                    <SparklinesLine style={{ stroke: "#5076de", fill: "#5076de", fillOpacity: ".5" }} />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                  <p>{p.pressureAvg} hPa</p>
                </td>
                <td>
                 <Sparklines data={p.humidityArray} svgWidth={295} svgHeight={110}>
                    <SparklinesBars style={{ stroke: "white", fill: "#5827e8", fillOpacity: "0" }} />
                    <SparklinesLine style={{ stroke: "#5827e8", fill: "#5827e8", fillOpacity: ".5" }} />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                  <p>{p.humidityAvg}%</p>
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