import { useEffect } from "react";

const Show = () => {
  

  const renderPosts = () => {
    return 'practice text'
  }
  
 useEffect(renderPosts);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">City</div>
          <div className="col-3">Temperature (F)</div>
          <div className="col-3">Pressure (hPa)</div>
          <div className="col-3">Humidity (%)</div>
        </div>
        <ul>{renderPosts()}</ul>
      </div>
      
    </div>
  )
}

export default Show;