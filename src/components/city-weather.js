import { useSelector } from "react-redux"
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from "react-sparklines"


const City_Weather = () => {
  const city = useSelector((state) => state)

  const dataAvg = (data) =>{
    if (data === undefined) {
      return
    }
    const lodash = require('lodash')
    const arr = data
    const mean = lodash.mean(arr).toFixed(2)
    return mean 
  }

    return ( 
      <div>
        <div className="row col-sm-10 offset-1 titles">
          <p className="col-sm-3 name" align="center"><strong>{city.city}</strong></p>
          <p className="col-sm-3 graph" align="center"> 
            <Sparklines data={city.temp}>
              <SparklinesLine color='orange' />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
           {dataAvg(city.temp)} 
          </p>
          <p className="col-sm-3 graph" align="center"> 
            <Sparklines data={city.pressure}>
              <SparklinesLine color='green'/>
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            {dataAvg(city.pressure)}
          </p>
          <p className="col-sm-3 graph" align="center">
            <Sparklines data={city.humidity}>
              <SparklinesLine color='blue'/>
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            {dataAvg(city.humidity)} 
          </p>
        </div>
        <hr className="line"></hr>
      </div>
    )
        
         
     
         
      
     
  // }
  // debugger
  // return (
  //   <div>{renderData}</div>
  // )

    }
export default City_Weather