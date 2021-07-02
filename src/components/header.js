//import NewCity from "newCity.js";

const header = (props) => {
  return (
    <div>
      <div className="jumbotron text-center">
        <div className="container">
          <br />
          <h1 className="jumbotron-heading">Redux Weather App</h1>
        </div>
      </div>
      <br />

      {/* <NewCity /> */}

      <div className="container">
        <div className="row">
          <div className="col-sm" align="center">
            <strong>City</strong>
          </div>
          <div className="col-sm" align="center">
            <strong>Temperature</strong>
          </div>
          <div className="col-sm" align="center">
            <strong>Pressure</strong>
          </div>
          <div className="col-sm" align="center">
            <strong>Humidity</strong>
          </div>
        </div>
        <hr />
      </div>

      <div className="container">{props.children}</div>
    </div>
  );
};

export default header;
