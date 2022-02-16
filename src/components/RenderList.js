
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { AverageTempForCity, AveragePressureForCity, AverageHumidityForCity } from "./AveragingFuncs";
import { tempArray, pressureArray, humidityArray } from "./SparklineLogic";





export const RenderList = () => {
  
  const cityData = useSelector(state => state)
  if (!cityData) {
    return '';
  }
  
  return (
    <div>
      <ul>{cityData.map((data, index) => <li className="render-list-item" key={index}>
                                            <div className="row">
                                              <div className="col-3">
                                                {data.city.name}
                                              </div>
                                              <div className="col-3">
                                                <Sparklines data={tempArray(data)}>
                                                  <SparklinesLine color="orange" />
                                                </Sparklines>
                                                {AverageTempForCity(data)}
                                              </div>
                                              <div className="col-3">
                                                <Sparklines data={pressureArray(data)}>
                                                  <SparklinesLine color="green" />
                                                </Sparklines>
                                                {AveragePressureForCity(data)}
                                              </div>
                                              <div className="col-3">
                                                <Sparklines data={humidityArray(data)}>
                                                  <SparklinesLine color="blue" />
                                                </Sparklines>
                                                {AverageHumidityForCity(data)}
                                              </div>
                                            </div>
                                          </li>)}
      </ul>
    </div>
    
  )
}