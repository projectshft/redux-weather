const searchBar = () => {
  return (
    <div id= "bar" className= "input-group">
      <input type="search" className="form-control rounded" placeholder="Get a 5-day forecast in your favorite cities" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary">search</button>
    </div>
  );
};

export default searchBar;