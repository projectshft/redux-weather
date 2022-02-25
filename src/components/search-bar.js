const SearchBar = () => {
  

  return (
    <div className="search-bar">
      <form>
        <div className="form-group">
          <input id="search" className="form-control" placeholder="Search for a city" value={} onChange={handleInputChange}></input>
        </div>

      </form>
    </div>
  )
};

export default SearchBar;