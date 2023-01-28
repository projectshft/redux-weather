const DisplayHeader = () => {
  return (
    <div className="display-header">
      <div className="row">
        <hr />
        <div className="col">
          <p>City</p>
        </div>

        <div className="col">
          <p>Temperature (F)</p>
        </div>

        <div className="col">
          <p>Pressure (hPa)</p>
        </div>

        <div className="col">
          <p>Humidity (%)</p>
        </div>
        <hr />
      </div>
    </div>
  );
}
 
export default DisplayHeader;