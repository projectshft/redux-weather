import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const SingleResult = ({ result }) => {
  const temperatures = result.data.map((curr) => {
    return curr.temperature;
  });
  const pressures = result.data.map((curr) => {
    return curr.pressure;
  });
  const humidities = result.data.map((curr) => {
    return curr.humidity;
  });

  const getAverage = (array) => {
    const sum = array.reduce((acc, curr) => {
      return acc + curr;
    }, 0)
    
    return Math.floor(sum / array.length);
  }

  return (
    <div className="row">
      <div className="col-md-3">
        <p><strong>{result.name}</strong></p>
        <button className="btn btn-primary">Set default</button>
        
      </div>  
      <div className="col-md-3">
        <Sparklines data={temperatures} width={100} height={20}>
          <SparklinesLine/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{getAverage(temperatures)} F</p>
      </div>

      <div className="col-md-3">
        <Sparklines data={pressures} width={100} height={20}>
          <SparklinesLine/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{getAverage(pressures)} hPa</p>
      </div>

      <div className="col-md-3">
        <Sparklines data={humidities} width={100} height={20}>
          <SparklinesLine/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{getAverage(humidities)}%</p>
      </div>

      <hr></hr>
    </div>   
  )
}

export default SingleResult;