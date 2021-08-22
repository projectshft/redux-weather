import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const CityTable = (props) => {
  // const temperatureData = [5,10,15,20];
  // const temperatureSum = temperatureData.reduce((a, b) => a + b, 0);
  // const temperatureAvg = temperatureSum/temperatureData.length;

  // const pressureData = [6,13,2,19];
  // const pressureSum = pressureData.reduce((a, b) => a + b, 0);
  // const pressureAvg = pressureSum/pressureData.length;

  // const humidityData = [1,44,55,39];
  // const humiditySum = humidityData.reduce((a, b) => a + b, 0);
  // const humidityAvg = humiditySum/humidityData.length;

  return props.searches.map((search, i) => (
  
    <table className="table table-hover" key={i}>
      <tbody>
      <tr className="align-middle">
          <td className="text-center">
            {search.data.city.name}
          </td>
          <td>
          <Sparklines data={search.data.list.map((block)=>{return block.main.temp;})}>
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="text-center">xxx F</div>
          </td>
          <td>
          <Sparklines data={search.data.list.map((block)=>{return block.main.pressure;})}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="text-center">xxx hPa</div>
          </td>
          <td>
          <Sparklines data={search.data.list.map((block)=>{return block.main.humidity;})}>
            <SparklinesLine color="purple" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="text-center">xxx %</div>
          </td>
        </tr>
      </tbody>
    </table>
  
  ));
}

export default CityTable;
