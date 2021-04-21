const CitySearch = () => {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Get a five day forecast in your favorite cities" />
          <div className="input-group-append" >
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitySearch;