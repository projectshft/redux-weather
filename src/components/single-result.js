import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useDispatch, useSelector } from 'react-redux';
import { setDefaultResultId } from '../actions'

const SingleResult = ({ result }) => {

  const defaultResultId = useSelector(state => state.defaultResult);

  const dispatch = useDispatch();

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

  const setDefault = () => {
    dispatch(setDefaultResultId(result.id));
  }

  return (
    <div className="row">
      <div className="col-md-3">
        <p><strong>{result.name}</strong></p>
        {defaultResultId !== result.id && <button className="btn btn-primary" onClick={setDefault}>Set default</button>}
        {defaultResultId === result.id && <p>Current default</p>}
        
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

      <iframe
        title={result.name}
        className="google-map-iframe"
        width="300"
        height="150"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDdeWs0zgAsEoYfxAzXb9fQNrNaxhG-Ze0&q=${result.name}`}>
      </iframe>

      <hr></hr>
    </div>   
  )
}

export default SingleResult;