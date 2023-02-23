function App() {
  return (
    <div className="col-md-6 offset-md-3">
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
    </div>
  );
}

export default App;
