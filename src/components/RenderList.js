
import { useSelector } from "react-redux";
import { AverageTempForCity } from "./AveragingFuncs";



export const RenderList = () => {
  
  const cityData = useSelector(state => state)
  
  if (!cityData) {
    return '';
  }

  console.log(AverageTempForCity(cityData))
  
  return (
    <div>
      <ul>{cityData.map((data, index) => <li key={index}> 
                                            <div className="row">
                                              <div className="col-3">
                                                {data.city.name}
                                              </div>
                                              <div className="col-3">{AverageTempForCity(data)}</div>
                                              {/* <div className="col-3">{city.main.pressure}</div> */}
                                              {/* <div className="col-3">{city.main.humidity}</div> */}
                                            </div>
                                          </li>)}
      </ul>
    </div>
    
  )
}