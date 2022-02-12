
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine } from 'react-sparklines';



export const RenderList = () => {
  
  const cityData = useSelector(state => state)
  
  if (!cityData) {
    return '';
  }


  
  return (
    <div>
      <ul>{cityData.map((city, index) => <li key={index}> 
                                            <div className="row">
                                              <div className="col-3">
                                              <Sparklines data={[5, 10, 5, 20]}>
                                                <SparklinesLine color="blue" />
                                              </Sparklines>
                                                {city.city.name}
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