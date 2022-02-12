import { RenderList } from "./RenderList"


const List = () => {


  return (
    <div className="container">
        <div className="row">
          <div className="col-3">City</div>
          <div className="col-3">Temperature (F)</div>
          <div className="col-3">Pressure (hPa)</div>
          <div className="col-3">Humidity (%)</div>
        </div>
        <div>
          {RenderList()}
        </div>
      </div>
  )
}

export default List