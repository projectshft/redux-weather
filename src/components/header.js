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

      <div className="container">
        <div className="row align-items-end">
          <div className="form-group col-md-6 offset-md-3">
            <input
              className="form-control"
              type="text"
              id="input-city"
              placeholder="Enter a City"
            ></input>
          </div>
          <div class="form-group col-md">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
      <br />

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
