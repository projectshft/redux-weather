
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { AverageTempForCity, AveragePressureForCity, AverageHumidityForCity } from "./AveragingFuncs";
import { tempArray } from "./SparklineLogic";





export const RenderList = () => {
  
  const cityData = useSelector(state => state)
  if (!cityData) {
    return '';
  }
  
  return (
    <div>
      <ul>{cityData.map((data, index) => <li key={index}>
                                            <div className="row">
                                              <div className="col-3">
                                                {data.city.name}
                                              </div>
                                              <div className="col-3">
                                                <Sparklines data={tempArray(data)}>
                                                  <SparklinesLine color="blue" />
                                                </Sparklines>
                                                {AverageTempForCity(data)}</div>
                                              <div className="col-3">{AveragePressureForCity(data)}</div>
                                              <div className="col-3">{AverageHumidityForCity(data)}</div>
                                            </div>
                                          </li>)}
      </ul>
    </div>
    
  )
}