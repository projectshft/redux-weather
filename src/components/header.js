const Header = (props) => {
  return (
    <div>
      <div className='jumbotron text-center'>
        <div className="container">
          <h1 className="jumbotron-heading">Redux Weather</h1>
        </div>
      </div>
      <div className="bar row">
        <div className="col-md-6 offset-md-3 p-2">
        <form className="form-group">
          <div className="input-group">
            <input
              type="text"
              id="search-query"
              placeholder="Enter City Name Here"
              className="form-control"
            />
            <span className="input-group-btn">
              <input
                type="button"
                value="Search"
                className="btn btn-primary search"
              />
            </span>
          </div>
        </form>
        </div>
      </div>
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
};

export default Header;