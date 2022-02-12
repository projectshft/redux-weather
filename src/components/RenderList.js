
import { useSelector } from "react-redux";



export const RenderList = () => {
  
  const cityData = useSelector(state => state)
  

  if (!cityData) {
    return '';
  }

  const averageTempForCity = (arr) => {
    const forecastList = [];
    
    arr.map(
      data => {
        return data.list.map(
          data => {
            const temp = data.main.temp;
            return forecastList.push(temp)
          }
        )
      }
    )

    const sum = forecastList.reduce((a, b) => a + b, 0);
    const avg = Math.floor(sum / forecastList.length)

    return avg;
  }

  console.log(averageTempForCity(cityData))


  
  return (
    <div>
      <ul>{cityData.map((cityData, index) => <li key={index}> 
                                            <div className="row">
                                              <div className="col-3">
                                                {cityData.city.name}
                                              </div>
                                              {/* <div className="col-3">{city.list}</div> */}
                                              {/* <div className="col-3">{city.main.pressure}</div> */}
                                              {/* <div className="col-3">{city.main.humidity}</div> */}
                                            </div>
                                          </li>)}
      </ul>
    </div>
    
  )
}