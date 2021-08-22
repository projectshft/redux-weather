const SearchBar = () => {
  return (
    <div className="row">
      <div className="col-md-10">
        <form className="search-form">
          <input type="text" className="form-control" placeholder="Enter City Name"></input>
        </form>
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-primary search">Search</button>
      </div>
    </div>
  )
}

export default SearchBar;