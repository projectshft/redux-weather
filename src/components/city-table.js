import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CityTable = (props) => {

  const dataAvg = (array) => {
    const total = array.reduce((a, b) => a + b, 0);
    return Math.round(total/array.length);
  }

  if (props.searches.length > 0) {

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
          <div className="text-center">{dataAvg(search.data.list.map((block)=>{return block.main.temp;}))} {'\xB0F'}</div>
          </td>

          <td>
          <Sparklines data={search.data.list.map((block)=>{return block.main.pressure;})}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="text-center">{dataAvg(search.data.list.map((block)=>{return block.main.pressure;}))} hPa</div>
          </td>

          <td>
          <Sparklines data={search.data.list.map((block)=>{return block.main.humidity;})}>
            <SparklinesLine color="purple" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="text-center">{dataAvg(search.data.list.map((block)=>{return block.main.humidity;}))}%</div>
          </td>
        </tr>
      </tbody>
    </table>
  
  ));
  } else {
    return <div></div>
  };
};

export default CityTable;
