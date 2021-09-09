import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


const SingleResult = ({result}) => {

  console.log(result);

  const city = result.name;

  const temperatures = result.data.map((t) => {
    return t.temperature;
  });

  const pressures = result.data.map((p) => {
    return p.pressure;
  })

  const humidities = result.data.map((h) => {
    return h.humidity;
  })
//
  const getAverage = (array) => {
    const sum = array.reduce((acc, curr) => {
      return acc + curr;
    }, 0)
    return Math.floor(sum / array.length);
  }

  
  return (
    <div className='results container'>
      <div className='row'>
        <div className='col'>
          {city}
        </div>
      
    
        <div className='col'>
          <Sparklines data={temperatures}>
            <SparklinesLine color='#FFA500' />
            <SparklinesReferenceLine type="avg" />
           </Sparklines>
            <p>{getAverage(temperatures)} F</p>
        </div>
  

   
        <div className='col'>
          <Sparklines data={pressures}>
            <SparklinesLine color='#00FF00' />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
            <p>{getAverage(pressures)} hPa</p>
        </div>
   

      
        <div className='col'>
          <Sparklines data={humidities}>
            <SparklinesLine color='#000000'/>
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        {getAverage(humidities)} %
        </div>
    </div>
    </div>

  )
}

export default SingleResult