

const Search = () => {
  return (
    <div>
      <form className="search-form justify-content-center row container">
        <div className="col-9">
          <input
            className="form-control"
            placeholder="Get a five-day forecast for you favorite cities"
          ></input>
        </div>
        <div className="col-2">
          <button
            className="btn-primary col-2 form-control"
            type="submit"
          >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Search;