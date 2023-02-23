const search = () => {
  return (
    <form>
        <div className="input-group mt-5">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Get a five-day forecast in your favorite cities"
          />
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </form>
  )
}

export default search;