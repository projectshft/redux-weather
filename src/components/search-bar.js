const SearchBar = () => {
  return (
    <form className="search-bar row">
            <div className="form-group col-md-10">
              <input
                type="text"
                placeholder="Enter City"
                className="form-control"
                id="weather-input"
              />
            </div>
            <div className="col-md-2">
              <button type="button" className="btn btn-primary" id="search-weather">
                Search
              </button>
            </div>

            <div className="col-md-4 offset-md-1">
              <button
                type="button"
                className="btn btn-secondary"
                id="current-location"
              >
                Use Current Location
              </button>
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-secondary" id="set-default">
                Set City As Default
              </button>
            </div>
          </form>
  )
}

export default SearchBar