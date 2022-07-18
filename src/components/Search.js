const Search = () => {
  return (
    <form className="row gx-2">
      <div className='col'>
        <input
          className='form-control'
          name='search' 
          placeholder="Get a five-day forecast in your favorite cities">
        </input>
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-primary px-4">Search</button>
      </div>
    </form>
  )
}

export default Search;